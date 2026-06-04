/* ============================================================
   状態管理
============================================================ */
let state = {
  teams: [],
  courses: [],
  teamRanks: {},   // round → { team: rank }
  penalty: 0
};

/* ============================================================
   タブ切り替え
============================================================ */
function openTab(id) {
  document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";

  document.querySelectorAll(".tab button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

/* ============================================================
   チーム設定
============================================================ */
function setTeams() {
  const input = document.getElementById("teamInput").value.trim();
  if (!input) return alert("チーム名を入力してください");

  state.teams = input.split(",").map(t => t.trim());
  renderRounds();
  renderScoreTable();
}

/* ============================================================
   コース設定
============================================================ */
function setCourses() {
  const input = document.getElementById("courseInput").value.trim();
  if (!input) return alert("コース名を入力してください");

  state.courses = input.split(",").map(t => t.trim());
  renderRounds();
}

/* ============================================================
   ラウンド UI
============================================================ */
function renderRounds() {
  const box = document.getElementById("roundContainer");
  box.innerHTML = "";

  for (let r = 0; r < 12; r++) {
    const div = document.createElement("div");
    div.className = "roundBox";

    const course = document.createElement("select");
    course.innerHTML = state.courses.map(c => `<option>${c}</option>`).join("");

    const teamSelects = state.teams.map(team => {
      return `<select id="r${r}_${team}">
                ${state.teams.map((_, i) => `<option>${i + 1}</option>`).join("")}
              </select>`;
    }).join("");

    div.innerHTML = `
      <strong>${r + 1}R</strong>
      ${teamSelects}
      <button onclick="confirmRound(${r})">確定</button>
    `;

    box.appendChild(div);
  }
}

/* ============================================================
   ラウンド確定
============================================================ */
function confirmRound(round) {
  const ranks = {};
  state.teams.forEach(team => {
    const sel = document.getElementById(`r${round}_${team}`);
    ranks[team] = Number(sel.value);
  });

  state.teamRanks[round] = ranks;

  renderScoreTable();
  sendOverlayToGAS();
  sendCurrentScoreEmbedToSelected(round);
  checkIfSetFinished();
}

/* ============================================================
   スコア計算
============================================================ */
function calcScores() {
  const scores = {};
  state.teams.forEach(t => scores[t] = 0);

  for (let r = 0; r < 12; r++) {
    if (!state.teamRanks[r]) continue;
    for (const team in state.teamRanks[r]) {
      const rank = state.teamRanks[r][team];
      scores[team] += (25 - rank);
    }
  }

  scores[state.teams[0]] += state.penalty;
  return scores;
}

/* ============================================================
   スコアテーブル描画
============================================================ */
function renderScoreTable() {
  const table = document.getElementById("scoreTable");
  const scores = calcScores();

  let html = "<tr><th>チーム</th><th>スコア</th></tr>";
  state.teams.forEach(t => {
    html += `<tr><td>${t}</td><td>${scores[t]}</td></tr>`;
  });

  table.innerHTML = html;
}

/* ============================================================
   ペナルティ
============================================================ */
function applyPenalty() {
  state.penalty = Number(document.getElementById("penaltyInput").value);
  renderScoreTable();
}

/* ============================================================
   GAS overlay 送信
============================================================ */
const GAS_URL = "YOUR_GAS_URL_HERE";

async function sendOverlayToGAS() {
  await fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "overlay",
      teams: state.teams,
      teamRanks: state.teamRanks
    })
  });
}

async function resetOverlayOnGAS() {
  await fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({ type: "reset" })
  });
}

/* ============================================================
   Webhook（複数登録 → 1つ選択）
============================================================ */
let webhookList = JSON.parse(localStorage.getItem("webhookList") || "[]");
let activeWebhookIndex = Number(localStorage.getItem("activeWebhookIndex") || -1);

function saveWebhookList() {
  localStorage.setItem("webhookList", JSON.stringify(webhookList));
  localStorage.setItem("activeWebhookIndex", activeWebhookIndex);
  renderWebhookList();
}

function addWebhook() {
  const url = document.getElementById("webhookInput").value.trim();
  if (!url) return alert("Webhook URL を入力してください");

  webhookList.push(url);
  activeWebhookIndex = webhookList.length - 1;
  saveWebhookList();

  document.getElementById("webhookInput").value = "";
}

function selectWebhook(i) {
  activeWebhookIndex = i;
  saveWebhookList();
}

function removeWebhook(i) {
  webhookList.splice(i, 1);
  if (activeWebhookIndex === i) activeWebhookIndex = -1;
  if (activeWebhookIndex > i) activeWebhookIndex--;
  saveWebhookList();
}

function renderWebhookList() {
  const box = document.getElementById("webhookList");
  box.innerHTML = "";

  webhookList.forEach((url, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <input type="radio" name="webhookSelect"
             ${activeWebhookIndex === i ? "checked" : ""}
             onclick="selectWebhook(${i})">
      <span>${url}</span>
      <button onclick="removeWebhook(${i})">削除</button>
    `;
    box.appendChild(div);
  });
}
renderWebhookList();

/* ============================================================
   途中経過（順位表）を選択された Webhook に送信
============================================================ */
async function sendCurrentScoreEmbedToSelected(round) {
  if (activeWebhookIndex < 0) return;

  const url = webhookList[activeWebhookIndex];
  const scores = calcScores();

  const ranking = [...state.teams]
    .map(name => ({ name, score: scores[name] }))
    .sort((a, b) => b.score - a.score);

  const topScore = ranking[0].score;

  const text =
    `【${round + 1}ラウンド終了】\n\n` +
    ranking
      .map((t, i) => {
        if (i === 0) return `1位：${t.name} ${t.score}点`;
        const diff = t.score - topScore;
        return `${i + 1}位：${t.name} ${t.score}点 (${diff})`;
      })
      .join("\n");

  const payload = {
    username: "MK Sokuzi",
    embeds: [
      {
        title: "📊 現在のスコア & 順位（累計）",
        description: text,
        color: 3447003,
        timestamp: new Date().toISOString()
      }
    ]
  };

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}

/* ============================================================
   リザルト背景画像（デフォ赤 → ユーザー優先）
============================================================ */
let resultBgImage = null;

document.getElementById("resultBgInput").onchange = e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    resultBgImage = new Image();
    resultBgImage.src = reader.result;
  };
  reader.readAsDataURL(file);
};

/* ============================================================
   リザルト画像生成（Canvas）
============================================================ */
function generateResultImage() {
  const canvas = document.createElement("canvas");
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext("2d");

  if (resultBgImage) {
    ctx.drawImage(resultBgImage, 0, 0, canvas.width, canvas.height);
  } else {
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, "#8b0000");
    grad.addColorStop(1, "#b30000");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.fillStyle = "white";
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("12 race result", 40, 80);

  const scores = calcScores();
  const sorted = [...state.teams].sort((a, b) => scores[b] - scores[a]);
  const topScore = scores[sorted[0]];

  ctx.font = "bold 36px sans-serif";
  let y = 160;

  sorted.forEach((team, i) => {
    const score = scores[team];
    const diff = score - topScore;
    const diffText = diff === 0 ? "" : ` (${diff > 0 ? "+" : ""}${diff})`;

    ctx.fillText(`${i + 1}位：${team}  ${score}点${diffText}`, 40, y);
    y += 60;
  });

  const graphX = 40;
  const graphY = 400;
  const graphW = 1200;
  const graphH = 250;

  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.strokeRect(graphX, graphY, graphW, graphH);

  const colors = ["#ff5555", "#55aaff", "#55ff55", "#ffaa00", "#ff55ff", "#00ffaa"];

  sorted.forEach((team, idx) => {
    ctx.strokeStyle = colors[idx % colors.length];
    ctx.lineWidth = 3;
    ctx.beginPath();

    for (let r = 0; r < 12; r++) {
      const rank = state.teamRanks[r]?.[team] ?? 24;
      const score = 25 - rank;

      const x = graphX + (graphW / 11) * r;
      const y = graphY + graphH - (score * (graphH / 25));

      if (r === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.stroke();
  });

  return canvas.toDataURL("image/png");
}

/* ============================================================
   リザルト画像を Webhook に送信
============================================================ */
async function sendResultImageToSelected(imgBase64) {
  if (activeWebhookIndex < 0) return;

  const url = webhookList[activeWebhookIndex];
  const blob = await (await fetch(imgBase64)).blob();

  const form = new FormData();
  form.append("file", blob, "result.png");
  form.append("payload_json", JSON.stringify({
    username: "MK Sokuzi",
    content: "12R 終了 — リザルト画像"
  }));

  await fetch(url, {
    method: "POST",
    body: form
  });
}

/* ============================================================
   12R 終了処理
============================================================ */
function checkIfSetFinished() {
  if (Object.keys(state.teamRanks).length === 12) {
    onSetFinished();
  }
}

async function onSetFinished() {
  const imgBase64 = generateResultImage();

  document.getElementById("resultImageLocal").src = imgBase64;
  document.getElementById("resultImageArea").style.display = "block";

  await fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "resultImage",
      image: imgBase64
    })
  });

  await sendResultImageToSelected(imgBase64);
  await resetOverlayOnGAS();

  alert("12R 終了 → リザルト画像を生成し、選択された Webhook に送信しました");
}

/* ============================================================
   画像保存
============================================================ */
function downloadResultImage() {
  const img = document.getElementById("resultImageLocal").src;
  const a = document.createElement("a");
  a.href = img;
  a.download = "result.png";
  a.click();
}

/* ============================================================
   OBS overlay
============================================================ */
function openOverlay() {
  window.open("overlay.html", "_blank");
}
