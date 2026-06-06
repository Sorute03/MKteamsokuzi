/* ============================================================
   基本設定・状態
============================================================ */

const totalRounds = 12;
const courseList = [
  "マリオブラザーズサーキット",
  "トロフィーシティ",
  "シュポポコースター",
  "DKうちゅうセンター",
  "サンサンさばく",
  "ヘイホーカーニバル",
  "ワリオスタジアム",
  "キラーシップ",
  "DKスノーマウンテン",
  "ロゼッタてんもんだい",
  "アイスビルディング",
  "ワリオシップ",
  "ノコノコビーチ",
  "リバーサイドサファリ",
  "ピーチスタジアム",
  "ピーチビーチ",
  "ソルティータウン",
  "ディノディノジャングル",
  "ハテナしんでん",
  "プクプクフォールズ",
  "ショーニューロード",
  "おばけシネマ",
  "ホネホネツイスター",
  "モーモーカントリー",
  "チョコマウンテン",
  "キノピオファクトリー",
  "クッパキャッスル",
  "どんぐりツリーハウス",
  "マリオサーキット",
  "レインボーロード",
     
  "DKうちゅうセンター→マリオブラザーズサーキット",
  "キノピオファクトリー→マリオブラザーズサーキット",
  "サンサンさばく→マリオブラザーズサーキット",
  "シュポポコースター→マリオブラザーズサーキット",
  "チョコマウンテン→マリオブラザーズサーキット",
  "トロフィーシティ→マリオブラザーズサーキット",
  "ヘイホーカーニバル→マリオブラザーズサーキット",
  "ワリオスタジアム→マリオブラザーズサーキット",

  "マリオブラザーズサーキット→トロフィーシティ",
  "シュポポコースター→トロフィーシティ",
  "DKうちゅうセンター→トロフィーシティ",
  "サンサンさばく→トロフィーシティ",
  "ワリオスタジアム→トロフィーシティ",
  "ノコノコビーチ→トロフィーシティ",
  "リバーサイドサファリ→トロフィーシティ",
  "モーモーカントリー→トロフィーシティ",
  "ピーチスタジアム→トロフィーシティ",

  "マリオブラザーズサーキット→シュポポコースター",
  "トロフィーシティ→シュポポコースター",
  "DKうちゅうセンター→シュポポコースター",
  "サンサンさばく→シュポポコースター",
  "チョコマウンテン→シュポポコースター",

  "マリオブラザーズサーキット→サンサンさばく",
  "トロフィーシティ→サンサンさばく",
  "シュポポコースター→サンサンさばく",
  "DKうちゅうセンター→サンサンさばく",
  "ヘイホーカーニバル→サンサンさばく",

  "マリオブラザーズサーキット→ヘイホーカーニバル",
  "サンサンさばく→ヘイホーカーニバル",
  "ワリオスタジアム→ヘイホーカーニバル",
  "キラーシップ→ヘイホーカーニバル",
  "チョコマウンテン→ヘイホーカーニバル",

  "マリオブラザーズサーキット→ワリオスタジアム",
  "トロフィーシティ→ワリオスタジアム",
  "ヘイホーカーニバル→ワリオスタジアム",
  "キラーシップ→ワリオスタジアム",
  "チョコマウンテン→ワリオスタジアム",
  "キノピオファクトリー→ワリオスタジアム",
  "クッパキャッスル→ワリオスタジアム",

  "ヘイホーカーニバル→キラーシップ",
  "ワリオスタジアム→キラーシップ",
  "キノピオファクトリー→キラーシップ",
  "クッパキャッスル→キラーシップ",
  "ホネホネツイスター→キラーシップ",

  "DKスノーマウンテン→ロゼッタてんもんだい",
  "アイスビルディング→ロゼッタてんもんだい",
  "ワリオシップ→ロゼッタてんもんだい",
  "プクプクフォールズ→ロゼッタてんもんだい",
  "ショーニューロード→ロゼッタてんもんだい",
  "おばけシネマ→ロゼッタてんもんだい",
  "マリオサーキット→ロゼッタてんもんだい",

  "DKスノーマウンテン→アイスビルディング",
  "ロゼッタてんもんだい→アイスビルディング",
  "ワリオシップ→アイスビルディング",
  "ショーニューロード→アイスビルディング",

  "DKスノーマウンテン→ワリオシップ",
  "ロゼッタてんもんだい→ワリオシップ",
  "アイスビルディング→ワリオシップ",
  "ピーチビーチ→ワリオシップ",
  "ソルティータウン→ワリオシップ",
  "プクプクフォールズ→ワリオシップ",

  "トロフィーシティ→ノコノコビーチ",
  "DKうちゅうセンター→ノコノコビーチ",
  "サンサンさばく→ノコノコビーチ",
  "シュポポコースター→ノコノコビーチ",
  "ディノディノジャングル→ノコノコビーチ",
  "ハテナしんでん→ノコノコビーチ",
  "ピーチスタジアム→ノコノコビーチ",
  "リバーサイドサファリ→ノコノコビーチ",

  "トロフィーシティ→リバーサイドサファリ",
  "ノコノコビーチ→リバーサイドサファリ",
  "ピーチビーチ→リバーサイドサファリ",
  "ソルティータウン→リバーサイドサファリ",
  "ディノディノジャングル→リバーサイドサファリ",
  "ハテナしんでん→リバーサイドサファリ",
  "プクプクフォールズ→リバーサイドサファリ",
  "ピーチスタジアム→リバーサイドサファリ",

  "ワリオシップ→ピーチビーチ",
  "リバーサイドサファリ→ピーチビーチ",
  "ソルティータウン→ピーチビーチ",
  "ディノディノジャングル→ピーチビーチ",
  "ハテナしんでん→ピーチビーチ",

  "DKスノーマウンテン→ソルティータウン",
  "アイスビルディング→ソルティータウン",
  "ワリオシップ→ソルティータウン",
  "ピーチビーチ→ソルティータウン",
  "プクプクフォールズ→ソルティータウン",
  "リバーサイドサファリ→ソルティータウン",
  "ディノディノジャングル→ソルティータウン",
  "ハテナしんでん→ソルティータウン",

  "ノコノコビーチ→ディノディノジャングル",
  "リバーサイドサファリ→ディノディノジャングル",
  "ピーチビーチ→ディノディノジャングル",
  "ソルティータウン→ディノディノジャングル",
  "ハテナしんでん→ディノディノジャングル",

  "リバーサイドサファリ→ハテナしんでん",
  "ピーチビーチ→ハテナしんでん",
  "ソルティータウン→ハテナしんでん",
  "ディノディノジャングル→ハテナしんでん",

  "DKスノーマウンテン→プクプクフォールズ",
  "ロゼッタてんもんだい→プクプクフォールズ",
  "ワリオシップ→プクプクフォールズ",
  "リバーサイドサファリ→プクプクフォールズ",
  "ソルティータウン→プクプクフォールズ",
  "ショーニューロード→プクプクフォールズ",
  "モーモーカントリー→プクプクフォールズ",
  "チョコマウンテン→プクプクフォールズ",
  "ピーチスタジアム→プクプクフォールズ",

  "DKスノーマウンテン→ショーニューロード",
  "ロゼッタてんもんだい→ショーニューロード",
  "アイスビルディング→ショーニューロード",
  "プクプクフォールズ→ショーニューロード",
  "おばけシネマ→ショーニューロード",
  "モーモーカントリー→ショーニューロード",
  "キノピオファクトリー→ショーニューロード",
  "どんぐりツリーハウス→ショーニューロード",
  "マリオサーキット→ショーニューロード",

  "ロゼッタてんもんだい→おばけシネマ",
  "ショーニューロード→おばけシネマ",
  "ホネホネツイスター→おばけシネマ",
  "どんぐりツリーハウス→おばけシネマ",
  "マリオサーキット→おばけシネマ",

  "ワリオスタジアム→ホネホネツイスター",
  "キラーシップ→ホネホネツイスター",
  "おばけシネマ→ホネホネツイスター",
  "モーモーカントリー→ホネホネツイスター",
  "キノピオファクトリー→ホネホネツイスター",
  "クッパキャッスル→ホネホネツイスター",
  "どんぐりツリーハウス→ホネホネツイスター",
  "マリオサーキット→ホネホネツイスター",

  "DKスノーマウンテン→モーモーカントリー",
  "ショーニューロード→モーモーカントリー",
  "プクプクフォールズ→モーモーカントリー",
  "ホネホネツイスター→モーモーカントリー",
  "チョコマウンテン→モーモーカントリー",
  "キノピオファクトリー→モーモーカントリー",
  "マリオサーキット→モーモーカントリー",
  "ピーチスタジアム→モーモーカントリー",

  "マリオブラザーズサーキット→チョコマウンテン",
  "トロフィーシティ→チョコマウンテン",
  "シュポポコースター→チョコマウンテン",
  "ヘイホーカーニバル→チョコマウンテン",
  "ワリオスタジアム→チョコマウンテン",
  "プクプクフォールズ→チョコマウンテン",
  "モーモーカントリー→チョコマウンテン",
  "キノピオファクトリー→チョコマウンテン",
  "クッパキャッスル→チョコマウンテン",

  "マリオブラザーズサーキット→キノピオファクトリー",
  "ワリオスタジアム→キノピオファクトリー",
  "キラーシップ→キノピオファクトリー",
  "ショーニューロード→キノピオファクトリー",
  "ホネホネツイスター→キノピオファクトリー",
  "モーモーカントリー→キノピオファクトリー",
  "チョコマウンテン→キノピオファクトリー",
  "クッパキャッスル→キノピオファクトリー",
  "どんぐりツリーハウス→キノピオファクトリー",
  "マリオサーキット→キノピオファクトリー",
  "ピーチスタジアム→キノピオファクトリー",

  "ワリオスタジアム→クッパキャッスル",
  "キラーシップ→クッパキャッスル",
  "ホネホネツイスター→クッパキャッスル",
  "チョコマウンテン→クッパキャッスル",
  "キノピオファクトリー→クッパキャッスル",
  "マリオサーキット→クッパキャッスル",

  "ショーニューロード→どんぐりツリーハウス",
  "おばけシネマ→どんぐりツリーハウス",
  "ホネホネツイスター→どんぐりツリーハウス",
  "キノピオファクトリー→どんぐりツリーハウス",
  "マリオサーキット→どんぐりツリーハウス",

  "ロゼッタてんもんだい→マリオサーキット",
  "ショーニューロード→マリオサーキット",
  "おばけシネマ→マリオサーキット",
  "ホネホネツイスター→マリオサーキット",
  "モーモーカントリー→マリオサーキット",
  "キノピオファクトリー→マリオサーキット",
  "クッパキャッスル→マリオサーキット",
  "どんぐりツリーハウス→マリオサーキット",

  "トロフィーシティ→ピーチスタジアム",
  "ノコノコビーチ→ピーチスタジアム",
  "リバーサイドサファリ→ピーチスタジアム",
  "プクプクフォールズ→ピーチスタジアム",
  "モーモーカントリー→ピーチスタジアム",
  "チョコマウンテン→ピーチスタジアム",
  "キノピオファクトリー→ピーチスタジアム",
  "マリオサーキット→ピーチスタジアム",

  "ピーチスタジアム→レインボーロード"
];
const state = {
  mode: "6v6",
  teams: ["チーム1","チーム2","チーム3","チーム4"],
  myTeam: "チーム1",
  enemyTeams: ["チーム2","チーム3","チーム4"],
  courseList: courseList,
  teamSizeMap: {},
  teamRanks: {},
  courseNames: Array(totalRounds).fill(""),
  penalty: {},
  currentRound: 0,
  timestamp: null,

  /* ★ ここに追加 */
  backgroundImage: null
};

/* ============================================================
   IndexedDB（history）
============================================================ */

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("mk_history", 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("history")) {
        db.createObjectStore("history", { keyPath:"id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveHistoryRecord() {
  const db = await openDB();
  const tx = db.transaction("history", "readwrite");
  const store = tx.objectStore("history");

  const ts = getUserTimestamp();
  state.timestamp = ts;

  const record = {
     id: ts,
     timestamp: ts,
     teams: state.teams,
     myTeam: state.myTeam,
     enemyTeams: state.enemyTeams,
     courses: state.courseNames,
     teamRanks: state.teamRanks,
     penalty: state.penalty,
   
     /* ★ ここに追加 */
     backgroundImage: state.backgroundImage
   };


  const allReq = store.getAll();
  allReq.onsuccess = () => {
    const existing = allReq.result || [];

    if (isFullDataDuplicate(record, existing)) {
      alert("この試合はすでに保存されています（重複）");
      return;
    }

    store.put(record);
    alert("試合を保存しました");
    loadLocalHistory();
  };
}

async function loadLocalHistory() {
  const db = await openDB();
  const tx = db.transaction("history", "readonly");
  const store = tx.objectStore("history");
  const req = store.getAll();

  req.onsuccess = () => {
    const list = req.result || [];
    state._history = list;
    renderLocalHistory(list);
  };
}

function renderLocalHistory(list) {
  const container = document.getElementById("localHistory");
  if (!container) return;
  container.innerHTML = "";

  if (!list.length) {
    container.textContent = "保存された戦績はありません。";
    return;
  }

  list
    .sort((a,b)=>b.timestamp - a.timestamp)
    .forEach(rec => {
      const div = document.createElement("div");
      div.className = "record";

      const d = new Date(rec.timestamp || rec.id);
      const dateStr = d.toLocaleString();

      const scores = calcScoresFromRecord(rec);
      const ranking = Object.entries(scores)
        .sort((a,b)=>b[1]-a[1])
        .map(([team,score],i)=>`${i+1}位 ${team} ${score}点`)
        .join(" / ");

      div.innerHTML = `
        <div><strong>${dateStr}</strong>（自チーム：${rec.myTeam}）</div>
        <div>${ranking}</div>
      `;
      container.appendChild(div);
    });
}

function calcScoresFromRecord(rec) {
  const result = {};
  rec.teams.forEach(team => {
    let score = 0;
    for (let r=0; r<totalRounds; r++) {
      const ranks = (rec.teamRanks[team] && rec.teamRanks[team][r]) || [];
      ranks.forEach(rank => score += getPointsByRank(rank));
    }
    score += (rec.penalty && rec.penalty[team]) || 0;
    result[team] = score;
  });
  return result;
}


/* ============================================================
   重複チェック
============================================================ */

function isFullDataDuplicate(record, existingList) {
  return existingList.some(existing => {

    // A. timestamp & myTeam が一致
    if (existing.timestamp === record.timestamp &&
        existing.myTeam === record.myTeam) {
      return true;
    }

    // B. 全データ完全一致
    const sameTeams   = JSON.stringify(existing.teams)     === JSON.stringify(record.teams);
    const sameCourses = JSON.stringify(existing.courses)   === JSON.stringify(record.courses);
    const sameRanks   = JSON.stringify(existing.teamRanks) === JSON.stringify(record.teamRanks);

    if (sameTeams && sameCourses && sameRanks) {
      return true;
    }

    // C. 特定チームモードでも「同じロジック」で判定するために
    //    record が部分データなら、existing から同じ部分を抽出して比較する
    if (record.teams.length === 1) {
      const t = record.teams[0];

      // existing にそのチームが存在しないなら比較不可 → 重複ではない
      if (!existing.teamRanks[t]) return false;

      const existingPartial = {
        teams: [t],
        courses: existing.courses,
        teamRanks: { [t]: existing.teamRanks[t] }
      };

      const recordPartial = {
        teams: [t],
        courses: record.courses,
        teamRanks: record.teamRanks
      };

      const sameTeams2   = JSON.stringify(existingPartial.teams)     === JSON.stringify(recordPartial.teams);
      const sameCourses2 = JSON.stringify(existingPartial.courses)   === JSON.stringify(recordPartial.courses);
      const sameRanks2   = JSON.stringify(existingPartial.teamRanks) === JSON.stringify(recordPartial.teamRanks);

      if (sameTeams2 && sameCourses2 && sameRanks2) {
        return true;
      }
    }

    return false;
  });
}



/* ============================================================
   タイムスタンプ入力
============================================================ */

function getUserTimestamp() {
  const input = document.getElementById("timestampInput");
  if (!input) return Date.now();

  const raw = input.value.trim();
  if (!raw) {
    return Date.now();
  }

  let s = raw
    .replace(/年/g, "/")
    .replace(/月/g, "/")
    .replace(/日/g, "")
    .replace(/時/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (/ \d{1,2}$/.test(s)) {
    s = s + ":00";
  }

  const d = new Date(s);
  if (isNaN(d.getTime())) {
    alert("タイムスタンプの形式が不正です（例: 2026/6/3 21）");
    return Date.now();
  }

  return d.getTime();
}

/* ============================================================
   webhook設定
============================================================ */

let webhookList = [];
let activeWebhookIndex = -1;

function loadWebhookSettings() {
  const saved = localStorage.getItem("mk_webhooks");
  if (saved) {
    const obj = JSON.parse(saved);
    webhookList = obj.list || [];
    activeWebhookIndex = obj.active ?? -1;
  }
  renderWebhookList();
}

function saveWebhookSettings() {
  localStorage.setItem("mk_webhooks", JSON.stringify({
    list: webhookList,
    active: activeWebhookIndex
  }));
}



function addWebhook() {
  const name = document.getElementById("webhookNameInput").value.trim();
  const url  = document.getElementById("webhookInput").value.trim();

  if (!url) return alert("URL を入力してください");
  if (!name) return alert("名前を入力してください");

  if (!url.startsWith("https://discord.com/api/webhooks/")) {
    return alert("Discord Webhook URL の形式ではありません");
  }

  webhookList.push({
    name,
    url,
    enabled: true
  });

  if (activeWebhookIndex === -1) activeWebhookIndex = 0;

  saveWebhookSettings();
  renderWebhookList();

  document.getElementById("webhookNameInput").value = "";
  document.getElementById("webhookInput").value = "";
}


function toggleWebhookEnabled(index) {
  webhookList[index].enabled = !webhookList[index].enabled;
  saveWebhookSettings();
  renderWebhookList();
}

function deleteWebhook(index) {
  webhookList.splice(index, 1);

  if (activeWebhookIndex === index) {
    activeWebhookIndex = webhookList.length ? 0 : -1;
  }

  saveWebhookSettings();
  renderWebhookList();
}

function selectWebhook(index) {
  activeWebhookIndex = index;
  saveWebhookSettings();
  renderWebhookList();
}

function editWebhookName(index) {
  const newName = prompt("新しい名前を入力", webhookList[index].name);
  if (!newName) return;
  webhookList[index].name = newName.trim();
  saveWebhookSettings();
  renderWebhookList();
}


function renderWebhookList() {
  const area = document.getElementById("webhookListArea");
  if (!area) return;

  if (!webhookList.length) {
    area.innerHTML = "<div>登録された Webhook はありません。</div>";
    return;
  }

  let html = "";
  webhookList.forEach((item, i) => {
    const active = (i === activeWebhookIndex) ? "style='color:#4caf50;font-weight:bold;'" : "";
    const enabledText = item.enabled ? "ON" : "OFF";
    const enabledColor = item.enabled ? "#4caf50" : "#888";

    html += `
      <div style="margin-bottom:6px;">
        <span ${active}>【${item.name}】 ${item.url}</span>
        <button onclick="selectWebhook(${i})">使用</button>
        <button onclick="toggleWebhookEnabled(${i})" style="color:${enabledColor};">${enabledText}</button>
        <button onclick="editWebhookName(${i})">名前変更</button>
        <button onclick="deleteWebhook(${i})">削除</button>
      </div>
    `;
  });

  area.innerHTML = html;
}

/* ============================================================
   送受信モード設定
============================================================ */

// JSON 用
let jsonShareMode = "all";
let jsonShareTeam = null;

// P2P 用
let p2pShareMode = "all";
let p2pShareTeam = null;


function updateJsonShareMode() {
  jsonShareMode = document.getElementById("jsonShareModeSelect").value;

  const area = document.getElementById("jsonShareTeamArea");
  if (jsonShareMode === "team") {
    area.style.display = "block";
    const sel = document.getElementById("jsonShareTeamSelect");
    sel.innerHTML = state.teams.map(t => `<option>${t}</option>`).join("");
    jsonShareTeam = sel.value;
    sel.onchange = () => jsonShareTeam = sel.value;
  } else {
    area.style.display = "none";
    jsonShareTeam = null;
  }
}

function updateP2pShareMode() {
  p2pShareMode = document.getElementById("p2pShareModeSelect").value;

  const area = document.getElementById("p2pShareTeamArea");
  if (p2pShareMode === "team") {
    area.style.display = "block";
    const sel = document.getElementById("p2pShareTeamSelect");
    sel.innerHTML = state.teams.map(t => `<option>${t}</option>`).join("");
    p2pShareTeam = sel.value;
    sel.onchange = () => p2pShareTeam = sel.value;
  } else {
    area.style.display = "none";
    p2pShareTeam = null;
  }
}

function buildJsonSharedData() {
  if (jsonShareMode === "all") {
    return {
      timestamp: state.timestamp || Date.now(),
      teams: state.teams,
      myTeam: state.myTeam,
      enemyTeams: state.enemyTeams,
      courses: state.courseNames,
      teamRanks: state.teamRanks,
      penalty: state.penalty
    };
  }

  // ★ 特定チームのみ
  const t = jsonShareTeam;

  return {
    timestamp: state.timestamp || Date.now(),
    teams: [t],
    myTeam: (state.myTeam === t ? t : ""),
    enemyTeams: [],
    courses: state.courseNames,
    teamRanks: { [t]: state.teamRanks[t] },
    penalty: { [t]: state.penalty[t] || 0 }
  };
}

function buildP2pSharedData() {
  if (p2pShareMode === "all") {
    return {
      timestamp: state.timestamp || Date.now(),
      teams: state.teams,
      myTeam: state.myTeam,
      enemyTeams: state.enemyTeams,
      courses: state.courseNames,
      teamRanks: state.teamRanks,
      penalty: state.penalty
    };
  }

  // ★ 特定チームのみ
  const t = p2pShareTeam;

  return {
    timestamp: state.timestamp || Date.now(),
    teams: [t],
    myTeam: (state.myTeam === t ? t : ""),
    enemyTeams: [],
    courses: state.courseNames,
    teamRanks: { [t]: state.teamRanks[t] },
    penalty: { [t]: state.penalty[t] || 0 }
  };
}


/* ============================================================
   チーム名・モード設定
============================================================ */

function createEnemyTeamEditor() {
  const count = parseInt(document.getElementById("teamCountSelect").value);
  const container = document.getElementById("enemyTeamEditor");
  container.innerHTML = "";

  for (let i = 1; i < count; i++) {
    const name = state.enemyTeams[i-1] || `チーム${i+1}`;
    const row = document.createElement("div");
    row.innerHTML = `
      <label>敵チーム${i}：</label>
      <input id="enemyTeamInput-${i}" value="${name}">
    `;
    container.appendChild(row);
  }
}

function createTeamNameEditor() {
  document.getElementById("myTeamInput").value = state.myTeam;
  createEnemyTeamEditor();
}

function applyTeamNames() {
  const count = parseInt(document.getElementById("teamCountSelect").value);

  const myTeam = document.getElementById("myTeamInput").value.trim() || "自チーム";
  const enemyTeams = [];
  for (let i = 1; i < count; i++) {
    const v = document.getElementById(`enemyTeamInput-${i}`).value.trim();
    enemyTeams.push(v || `敵チーム${i}`);
  }

  state.myTeam = myTeam;
  state.enemyTeams = enemyTeams;
  state.teams = [myTeam, ...enemyTeams];
  state.penalty = {};

  setFormatFromMode(state.mode);
  alert("チーム名を更新しました");
}

function setFormatFromMode(modeStr) {
  state.mode = modeStr;

  const size = parseInt(modeStr.split("v")[0]);
  const totalPlayers = 24;
  const teamCount = totalPlayers / size;

  document.getElementById("teamCountSelect").value = String(teamCount);

  const names = [];
  names.push(state.myTeam || "チーム1");
  for (let i = 1; i < teamCount; i++) {
    names.push(state.enemyTeams[i-1] || `チーム${i+1}`);
  }
  state.teams = names;
  state.enemyTeams = names.slice(1);

  state.teamSizeMap = {};
  state.teams.forEach(team => state.teamSizeMap[team] = size);

  state.teamRanks = {};
  state.teams.forEach(team => {
    state.teamRanks[team] = {};
    for (let r=0; r<totalRounds; r++) state.teamRanks[team][r] = [];
  });

  createTeamNameEditor();
  createCourseSelectors();
  createTeamInputs();
  updateScores();
}


/* ============================================================
   コース選択
============================================================ */

function createCourseSelectors() {
  const container = document.getElementById("course-container");
  container.innerHTML = "";

  for (let i=0; i<totalRounds; i++) {
    const row = document.createElement("div");
    row.innerHTML = `
      <label>ラウンド${i+1}：</label>
      <select id="course-select-${i}">
        ${state.courseList.map(c => `<option>${c}</option>`).join("")}
      </select>
    `;
    container.appendChild(row);
  }
}


/* ============================================================
   順位入力（24 ボタン）
============================================================ */

function createTeamInputs() {
  const container = document.getElementById("teams-container");
  container.innerHTML = "";

  for (let round=0; round<totalRounds; round++) {
    const section = document.createElement("div");
    section.className = "team-section";

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.innerHTML = `
      <h3>ラウンド${round+1}</h3>
      <button onclick="confirmRound(${round})">確定</button>
    `;
    section.appendChild(header);

    state.teams.forEach(team => {
      const label = document.createElement("div");
      label.textContent = team;

      const row = document.createElement("div");
      row.className = "rank-buttons";

      for (let rank=1; rank<=24; rank++) {
        const btn = document.createElement("div");
        btn.className = "rank-button";
        btn.textContent = rank;
        btn.dataset.team = team;
        btn.dataset.round = round;
        btn.dataset.rank = rank;
        btn.onclick = () => toggleRank(team, round, rank, btn);
        row.appendChild(btn);
      }

      section.appendChild(label);
      section.appendChild(row);
    });

    container.appendChild(section);
  }
}

function toggleRank(team, round, rank, btn) {
  const arr = state.teamRanks[team][round];
  const idx = arr.indexOf(rank);

  if (idx >= 0) {
    arr.splice(idx,1);
    btn.classList.remove("selected");
  } else {
    if (arr.length < state.teamSizeMap[team]) {
      arr.push(rank);
      btn.classList.add("selected");
    } else {
      alert(`${team} は最大 ${state.teamSizeMap[team]} 人です`);
    }
  }

  autoFillMissingTeam(round);
  updateScores();
}

function autoFillMissingTeam(round) {
  const filled = state.teams.filter(t =>
    state.teamRanks[t][round].length === state.teamSizeMap[t]
  );
  if (filled.length < state.teams.length - 1) return;

  const used = new Set();
  state.teams.forEach(t => {
    state.teamRanks[t][round].forEach(r => used.add(r));
  });

  const remaining = Array.from({length:24},(_,i)=>i+1).filter(r=>!used.has(r));

  state.teams.forEach(team => {
    const need = state.teamSizeMap[team];
    const arr = state.teamRanks[team][round];
    while (arr.length < need && remaining.length > 0) {
      const next = remaining.shift();
      arr.push(next);
      const btn = document.querySelector(
        `.rank-button[data-team="${team}"][data-round="${round}"][data-rank="${next}"]`
      );
      if (btn) btn.classList.add("selected");
    }
  });
}

/* ============================================================
   得点計算
============================================================ */

function getPointsByRank(rank) {
  if (rank===1) return 15;
  if (rank===2) return 12;
  if (rank===3) return 10;
  if (rank===4||rank===5) return 9;
  if (rank===6||rank===7) return 8;
  if (rank===8||rank===9) return 7;
  if (rank>=10 && rank<=12) return 6;
  if (rank>=13 && rank<=15) return 5;
  if (rank>=16 && rank<=18) return 4;
  if (rank>=19 && rank<=21) return 3;
  if (rank===22||rank===23) return 2;
  if (rank===24) return 1;
  return 0;
}

function calculateTeamScores() {
  const result = {};
  state.teams.forEach(team => {
    let score = 0;
    for (let r=0; r<totalRounds; r++) {
      state.teamRanks[team][r].forEach(rank => {
        score += getPointsByRank(rank);
      });
    }
    score += (state.penalty[team] || 0);
    result[team] = score;
  });
  return result;
}

function updateScores() {
  const scores = calculateTeamScores();
  const results = Object.entries(scores).sort((a,b)=>b[1]-a[1]);

  const tbody = document.querySelector("#scoreTable tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  results.forEach(([team,score],i)=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${i+1}</td><td>${team}</td><td>${score}</td>`;
    tbody.appendChild(tr);
  });

  // ★ 追加：オーバーレイへ送信
  sendOverlay();
}



/* ============================================================
   ラウンド確定
============================================================ */

function confirmRound(round) {
  const courseSel = document.getElementById(`course-select-${round}`);
  if (courseSel) {
    state.courseNames[round] = courseSel.value;
  }

  for (const team of state.teams) {
    const need = state.teamSizeMap[team];
    const arr = state.teamRanks[team][round];
    if (arr.length !== need) {
      alert(`${team} の人数が不足しています`);
      return;
    }
  }

  alert(`ラウンド${round+1}を保存しました`);

  // オーバーレイ送信
  sendOverlay();

  // ★ 途中経過送信（静かに）
  sendInstantScoreMulti(true);

  // 12R 目ならリザルト送信なども可能
}





/* ============================================================
   ペナルティ
============================================================ */

function openPenaltyTeamSelect() {
  const container = document.getElementById("penaltyTeamButtons");
  container.innerHTML = "";
  state.teams.forEach(team=>{
    const btn = document.createElement("button");
    btn.textContent = team;
    btn.onclick = ()=>selectPenaltyTeam(team);
    container.appendChild(btn);
  });
  document.getElementById("penaltyModal").style.display = "block";
}

function closePenaltyModal() {
  document.getElementById("penaltyModal").style.display = "none";
}

function selectPenaltyTeam(team) {
  closePenaltyModal();
  const p = parseInt(prompt(`${team} のペナルティ点数`),10);
  if (!p) return;
  state.penalty[team] = (state.penalty[team] || 0) + p;
  updateScores();

  // ★ 追加
  sendOverlay();
}



/* ============================================================
   リセット
============================================================ */

function resetRanks() {
  if (!confirm("リセットしますか？")) return;
  setFormatFromMode(state.mode);

  // ★ 追加
  sendOverlay();
}

function loadBackgroundImage(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.backgroundImage = reader.result;  // base64
    alert("背景画像を読み込みました");
  };
  reader.readAsDataURL(file);
}



/* ============================================================
   集計機能
============================================================ */

function calcRoundScores() {
  const roundScores = {};

  for (let r = 0; r < totalRounds; r++) {
    roundScores[r] = {};
    for (const team of state.teams) {
      const ranks = state.teamRanks[team][r] || [];
      let score = 0;
      ranks.forEach(rank => score += getPointsByRank(rank));
      roundScores[r][team] = score;
    }
  }

  return roundScores;
}

function calcTeamProgress() {
  const progress = {};

  for (const team of state.teams) {
    progress[team] = [];
    for (let r = 0; r < totalRounds; r++) {
      const ranks = state.teamRanks[team][r] || [];
      progress[team].push(ranks.length ? Math.min(...ranks) : null);
    }
  }

  return progress;
}

function calcRanking() {
  const scores = calculateTeamScores();

  return Object.entries(scores)
    .map(([team, score]) => ({ team, score }))
    .sort((a, b) => b.score - a.score);
}

function showRanking() {
  const ranking = calcRanking();
  if (!ranking.length) return;
  const top = ranking[0].score;

  let html = "<h3>順位表</h3>";
  html += "<table border='1' cellpadding='6'><tr><th>順位</th><th>チーム</th><th>スコア</th><th>差分</th></tr>";

  ranking.forEach((t, i) => {
    const diff = t.score - top;
    html += `<tr>
      <td>${i + 1}</td>
      <td>${t.team}</td>
      <td>${t.score}</td>
      <td>${diff === 0 ? "-" : diff}</td>
    </tr>`;
  });

  html += "</table>";
  const area = document.getElementById("aggregateArea");
  if (area) area.innerHTML = html;
}

function showRoundScores() {
  const roundScores = calcRoundScores();

  let html = "<h3>ラウンド別スコア</h3>";

  for (let r = 0; r < totalRounds; r++) {
    html += `<h4>${r + 1}R</h4>`;
    html += "<table border='1' cellpadding='6'><tr><th>チーム</th><th>得点</th></tr>";

    for (const team of state.teams) {
      html += `<tr><td>${team}</td><td>${roundScores[r][team]}</td></tr>`;
    }

    html += "</table>";
  }

  const area = document.getElementById("aggregateArea");
  if (area) area.innerHTML = html;
}

function showTeamProgress() {
  const progress = calcTeamProgress();

  let html = "<h3>チーム別順位推移</h3>";

  for (const team of state.teams) {
    html += `<h4>${team}</h4>`;
    html += `<p>${progress[team].map(v => v ?? "-").join(" → ")}</p>`;
  }

  const area = document.getElementById("aggregateArea");
  if (area) area.innerHTML = html;
}


/* ============================================================
   即時集計送信（Webhook）
============================================================ */

async function sendInstantScore() {
  if (!webhookList.length || activeWebhookIndex < 0) {
    alert("Webhook が選択されていません");
    return;
  }

  const url = webhookList[activeWebhookIndex];
  const ranking = calcRanking();
  if (!ranking.length) {
    alert("スコアがありません");
    return;
  }
  const top = ranking[0].score;

  const text =
    `【即時集計】\n\n` +
    ranking.map((t, i) => {
      const diff = t.score - top;
      return `${i + 1}位：${t.team} ${t.score}点 ${diff === 0 ? "" : `(${diff})`}`;
    }).join("\n");

  const payload = {
    username: "MK Sokuzi",
    embeds: [
      {
        title: `📊 現在のスコア（自チーム：${state.myTeam}）`,
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

  alert("途中経過を送信しました");
}


async function sendInstantScoreMulti(silent = false) {
  // ★ ON の Webhook だけ抽出
  const enabledWebhooks = webhookList.filter(w => w.enabled);

  if (!enabledWebhooks.length) {
    if (!silent) alert("有効な Webhook がありません");
    return;
  }

  const ranking = calcRanking();
  if (!ranking.length) return;

  const top = ranking[0].score;

  const text =
    `【即時集計】\n\n` +
    ranking.map((t, i) => {
      const diff = t.score - top;
      return `${i + 1}位：${t.team} ${t.score}点 ${diff === 0 ? "" : `(${diff})`}`;
    }).join("\n");

  const payload = {
    username: "MK Sokuzi",
    embeds: [
      {
        title: `📊 現在のスコア（自チーム：${state.myTeam}）`,
        description: text,
        color: 3447003,
        timestamp: new Date().toISOString()
      }
    ]
  };

  // ★ ON の Webhook だけに送信
  for (const w of enabledWebhooks) {
    try {
      await fetch(w.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.warn("Webhook 送信失敗:", w.url, e);
    }
  }

  if (!silent) alert("途中経過を送信しました");
}


/* ============================================================
   分析関連
============================================================ */

function initTeamAnalysisUI() {
  const sel = document.getElementById("analysisTeamSelect");
  if (!sel) return;
  if (!state.teams || state.teams.length === 0) return;

  sel.innerHTML = state.teams
    .map(t => `<option value="${t}">${t}</option>`)
    .join("");

  // 初期表示
  updateTeamAnalysis();
}

function calcStdDev(values) {
  if (!values || values.length === 0) return 0;
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / values.length;
  return Math.sqrt(variance);
}


function calcCourseStats(team) {
  const stats = {};

  for (const course of state.courseNames) {
    stats[course] = {
      count: 0,
      wins: 0,
      totalScore: 0,
      scores: []
    };
  }

  const records = state.teamRanks[team] || [];

  for (const r of records) {
    const c = r.course;
    if (!stats[c]) continue;

    stats[c].count++;
    stats[c].totalScore += r.score;
    stats[c].scores.push(r.score);
    if (r.rank <= 3) stats[c].wins++;
  }

  for (const c of state.courseNames) {
    const s = stats[c];
    s.stddev = calcStdDev(s.scores);
  }

  return stats;
}

function calcOpponentStats(team) {
  const stats = {};

  for (const opp of state.teams) {
    if (opp === team) continue;

    stats[opp] = {
      count: 0,
      wins: 0,
      scoreDiff: 0
    };
  }

  const myRecords = state.teamRanks[team] || [];

  for (const r of myRecords) {
    for (const opp of state.teams) {
      if (opp === team) continue;

      const oppRecord = state.teamRanks[opp]?.find(x => x.raceId === r.raceId);
      if (!oppRecord) continue;

      stats[opp].count++;
      if (r.rank < oppRecord.rank) stats[opp].wins++;
      stats[opp].scoreDiff += (r.score - oppRecord.score);
    }
  }

  return stats;
}

function calcCourseOpponentMatrix(team) {
  const matrix = {};

  for (const course of state.courseNames) {
    matrix[course] = {};
    for (const opp of state.teams) {
      if (opp === team) continue;
      matrix[course][opp] = { count: 0, wins: 0 };
    }
  }

  const myRecords = state.teamRanks[team] || [];

  for (const r of myRecords) {
    const course = r.course;

    for (const opp of state.teams) {
      if (opp === team) continue;

      const oppRecord = state.teamRanks[opp]?.find(x => x.raceId === r.raceId);
      if (!oppRecord) continue;

      const cell = matrix[course][opp];
      cell.count++;
      if (r.rank < oppRecord.rank) cell.wins++;
    }
  }

  return matrix;
}

function calcCourseOpponentScoreDiffMatrix(team) {
  const matrix = {};

  for (const course of state.courseNames) {
    matrix[course] = {};
    for (const opp of state.teams) {
      if (opp === team) continue;
      matrix[course][opp] = { count: 0, scoreDiff: 0 };
    }
  }

  const myRecords = state.teamRanks[team] || [];

  for (const r of myRecords) {
    const course = r.course;

    for (const opp of state.teams) {
      if (opp === team) continue;

      const oppRecord = state.teamRanks[opp]?.find(x => x.raceId === r.raceId);
      if (!oppRecord) continue;

      const cell = matrix[course][opp];
      cell.count++;
      cell.scoreDiff += (r.score - oppRecord.score);
    }
  }

  return matrix;
}

function calcCourseStrengthRanking(team) {
  const stats = calcCourseStats(team);
  const result = [];

  for (const course of state.courseNames) {
    const s = stats[course];
    if (!s || s.count === 0) continue;

    const winRate = s.wins / s.count;
    const avgScore = s.totalScore / s.count;
    const stddev = s.stddev;

    const score =
      avgScore * 0.5 +
      winRate * 40 * 0.4 +
      (1 / (1 + stddev)) * 20;

    result.push({
      course,
      count: s.count,
      winRate,
      avgScore,
      stddev,
      score
    });
  }

  const strong = [...result].sort((a, b) => b.score - a.score).slice(0, 10);
  const weak   = [...result].sort((a, b) => a.score - b.score).slice(0, 10);

  return { strong, weak };
}

function calcStabilityRanking(team) {
  const stats = calcCourseStats(team);
  const list = [];

  for (const course of state.courseNames) {
    const s = stats[course];
    if (!s || s.count === 0) continue;

    list.push({
      course,
      count: s.count,
      stddev: s.stddev
    });
  }

  const stable   = [...list].sort((a, b) => a.stddev - b.stddev).slice(0, 10);
  const unstable = [...list].sort((a, b) => b.stddev - a.stddev).slice(0, 10);

  return { stable, unstable };
}

function renderCourseStats(stats) {
  const table = document.getElementById("tableCourseStats");
  if (!table) return;

  let html = `
    <tr>
      <th>コース</th>
      <th>走行数</th>
      <th>勝率</th>
      <th>平均得点</th>
      <th>期待値</th>
      <th>安定度（標準偏差）</th>
    </tr>
  `;

  for (const course of state.courseNames) {
    const s = stats[course];
    if (!s || s.count === 0) continue;

    html += `
      <tr>
        <td>${course}</td>
        <td>${s.count}</td>
        <td>${(s.wins / s.count * 100).toFixed(1)}%</td>
        <td>${(s.totalScore / s.count).toFixed(2)}</td>
        <td>${(s.totalScore / s.count).toFixed(2)}</td>
        <td>${s.stddev.toFixed(2)}</td>
      </tr>
    `;
  }

  table.innerHTML = html;
}

function renderOpponentStats(stats) {
  const table = document.getElementById("tableOpponentStats");
  if (!table) return;

  let html = `
    <tr>
      <th>相手チーム</th>
      <th>対戦数</th>
      <th>勝率</th>
      <th>平均得点差</th>
    </tr>
  `;

  for (const opp of state.teams) {
    if (!stats[opp]) continue;

    const s = stats[opp];
    if (s.count === 0) continue;

    html += `
      <tr>
        <td>${opp}</td>
        <td>${s.count}</td>
        <td>${(s.wins / s.count * 100).toFixed(1)}%</td>
        <td>${(s.scoreDiff / s.count).toFixed(2)}</td>
      </tr>
    `;
  }

  table.innerHTML = html;
}

function renderCourseOpponentMatrix(matrix) {
  const table = document.getElementById("tableCourseOpponentMatrix");
  if (!table) return;

  let html = "<tr><th>コース</th>";
  for (const opp of state.teams) html += `<th>${opp}</th>`;
  html += "</tr>";

  for (const course of state.courseNames) {
    html += `<tr><td>${course}</td>`;

    for (const opp of state.teams) {
      const cell = matrix[course][opp];
      if (!cell || cell.count === 0) {
        html += "<td>-</td>";
        continue;
      }

      html += `<td>${(cell.wins / cell.count * 100).toFixed(1)}%</td>`;
    }

    html += "</tr>";
  }

  table.innerHTML = html;
}

function renderCourseOpponentScoreDiffMatrix(matrix) {
  const table = document.getElementById("tableCourseOpponentScoreDiffMatrix");
  if (!table) return;

  let html = "<tr><th>コース</th>";
  for (const opp of state.teams) html += `<th>${opp}</th>`;
  html += "</tr>";

  for (const course of state.courseNames) {
    html += `<tr><td>${course}</td>`;

    for (const opp of state.teams) {
      const cell = matrix[course][opp];
      if (!cell || cell.count === 0) {
        html += "<td>-</td>";
        continue;
      }

      html += `<td>${(cell.scoreDiff / cell.count).toFixed(2)}</td>`;
    }

    html += "</tr>";
  }

  table.innerHTML = html;
}

let courseRadarChart = null;

function buildCourseRadarData(team) {
  const stats = calcCourseStats(team);

  return {
    labels: state.courseNames,
    datasets: [{
      label: `${team} 平均得点`,
      data: state.courseNames.map(c => {
        const s = stats[c];
        return s.count ? (s.totalScore / s.count) : 0;
      }),
      borderColor: "rgba(255,99,132,1)",
      backgroundColor: "rgba(255,99,132,0.2)"
    }]
  };
}

function renderCourseRadar(team) {
  const ctx = document.getElementById("chartCourseRadar").getContext("2d");
  const data = buildCourseRadarData(team);

  if (courseRadarChart) courseRadarChart.destroy();

  courseRadarChart = new Chart(ctx, {
    type: "radar",
    data,
    options: {
      scales: { r: { beginAtZero: true } }
    }
  });
}

let opponentRadarChart = null;

function buildOpponentRadarData(team) {
  const stats = calcOpponentStats(team);

  return {
    labels: state.teams.filter(t => t !== team),
    datasets: [{
      label: `${team} vs 相手チーム 平均得点差`,
      data: state.teams
        .filter(t => t !== team)
        .map(opp => {
          const s = stats[opp];
          return s.count ? (s.scoreDiff / s.count) : 0;
        }),
      borderColor: "rgba(54,162,235,1)",
      backgroundColor: "rgba(54,162,235,0.2)"
    }]
  };
}

function renderOpponentRadar(team) {
  const ctx = document.getElementById("chartOpponentRadar").getContext("2d");
  const data = buildOpponentRadarData(team);

  if (opponentRadarChart) opponentRadarChart.destroy();

  opponentRadarChart = new Chart(ctx, {
    type: "radar",
    data,
    options: {
      scales: { r: { beginAtZero: true } }
    }
  });
}

let heatmapChart = null;

function buildCourseOpponentHeatmap(team) {
  const matrix = calcCourseOpponentScoreDiffMatrix(team);
  const data = [];

  state.courseNames.forEach((course, i) => {
    state.teams.forEach((opp, j) => {
      if (opp === team) return;

      const cell = matrix[course][opp];
      const value = cell && cell.count ? (cell.scoreDiff / cell.count) : 0;

      data.push({
        x: opp,
        y: course,
        v: value
      });
    });
  });

  return data;
}

function renderCourseOpponentHeatmap(team) {
  const ctx = document.getElementById("chartCourseOpponentHeatmap").getContext("2d");
  const data = buildCourseOpponentHeatmap(team);

  if (heatmapChart) heatmapChart.destroy();

  heatmapChart = new Chart(ctx, {
    type: "matrix",
    data: {
      datasets: [{
        label: "得点差ヒートマップ",
        data,
        backgroundColor(ctx) {
          const v = ctx.dataset.data[ctx.dataIndex].v;
          return v > 0 ? "rgba(0,200,0,0.6)" : "rgba(200,0,0,0.6)";
        },
        width: ({chart}) => (chart.chartArea.width / state.teams.length),
        height: ({chart}) => (chart.chartArea.height / state.courseNames.length)
      }]
    },
    options: {
      scales: {
        x: { type: "category", labels: state.teams },
        y: { type: "category", labels: state.courseNames }
      }
    }
  });
}

function updateTeamAnalysis() {
  const sel = document.getElementById("analysisTeamSelect");
  if (!sel) return;
  const team = sel.value;
  if (!team) return;

  const courseStats = calcCourseStats(team);
  const oppStats = calcOpponentStats(team);
  const matrix = calcCourseOpponentMatrix(team);
  const scoreMatrix = calcCourseOpponentScoreDiffMatrix(team);
  const ranking = calcCourseStrengthRanking(team);
  const stability = calcStabilityRanking(team);

  renderCourseStats(courseStats);
  renderOpponentStats(oppStats);
  renderCourseOpponentMatrix(matrix);
  renderCourseOpponentScoreDiffMatrix(scoreMatrix);

  renderCourseRadar(team);
  renderOpponentRadar(team);
  renderCourseOpponentHeatmap(team);

  renderStrongCourseRanking(ranking.strong);
  renderWeakCourseRanking(ranking.weak);
  renderStableCourseRanking(stability.stable);
  renderUnstableCourseRanking(stability.unstable);
}


/* ============================================================
   JSON 関連
============================================================ */

function exportJSON() {
  const ts = getUserTimestamp();
  state.timestamp = ts;

  // ★ JSON 共有モードに応じてデータを構築
  const data = buildJsonSharedData();

  // ★ 背景画像は常に含める（全データでも特定チームでも）
  data.backgroundImage = state.backgroundImage || null;

  document.getElementById("jsonArea").value = JSON.stringify(data, null, 2);
}


function importJSON() {
  const area = document.getElementById("jsonArea");
  if (!area) return;

  try {
    const data = JSON.parse(area.value);

    const record = {
      timestamp: data.timestamp || Date.now(),
      teams: data.teams,
      myTeam: data.myTeam,
      enemyTeams: data.enemyTeams,
      courses: data.courses,
      teamRanks: data.teamRanks,
      penalty: data.penalty,
      backgroundImage: data.backgroundImage || null
    };

    openDB().then(db => {
      const tx = db.transaction("history", "readonly");
      const store = tx.objectStore("history");
      const req = store.getAll();

      req.onsuccess = () => {
        const existing = req.result || [];

        if (isFullDataDuplicate(record, existing)) {
          alert("読み込んだ JSON は既存データと重複しています");
          return;
        }

        // ★ state に反映
        state.timestamp   = record.timestamp;
        state.teams       = record.teams;
        state.myTeam      = record.myTeam;
        state.enemyTeams  = record.enemyTeams;
        state.courseNames = record.courses;
        state.teamRanks   = record.teamRanks;
        state.penalty     = record.penalty || {};
        state.backgroundImage = record.backgroundImage || null;

        setFormatFromMode(state.mode);
        updateScores();

        // ★ IndexedDB に保存（ここが追加）
        const tx2 = db.transaction("history", "readwrite");
        const store2 = tx2.objectStore("history");
        store2.put({
          id: record.timestamp,
          ...record
        });

        alert("JSON を読み込み、履歴に保存しました");
      };
    });

  } catch (e) {
    alert("JSON の形式が正しくありません");
  }
}


function downloadJSONFile() {
  const ts = getUserTimestamp();
  state.timestamp = ts;

  const data = {
    timestamp: ts,
    teams: state.teams,
    myTeam: state.myTeam,
    enemyTeams: state.enemyTeams,
    courses: state.courseNames,
    teamRanks: state.teamRanks,
    penalty: state.penalty
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mk_result_${ts}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function uploadJSONFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const area = document.getElementById("jsonArea");
    if (area) area.value = text;
    importJSON();
  };
  reader.readAsText(file);
}

function setupJSONDropArea() {
  const dropArea = document.getElementById("jsonDropArea");
  if (!dropArea) return;

  dropArea.addEventListener("dragover", e => {
    e.preventDefault();
    dropArea.style.background = "#eef";
  });
  dropArea.addEventListener("dragleave", e => {
    e.preventDefault();
    dropArea.style.background = "#fafafa";
  });
  dropArea.addEventListener("drop", e => {
    e.preventDefault();
    dropArea.style.background = "#fafafa";
    const file = e.dataTransfer.files[0];
    if (file) uploadJSONFile(file);
  });
}

function downloadTeamJSONFile(teamName) {
  if (!teamName) {
    alert("チーム名を入力してください");
    return;
  }
  if (!state.teams.includes(teamName)) {
    alert("そのチームは現在のデータに存在しません");
    return;
  }

  const ts = getUserTimestamp();

  const teamRanks = {};
  teamRanks[teamName] = state.teamRanks[teamName];

  const data = {
    timestamp: ts,
    teams: [teamName],
    myTeam: teamName === state.myTeam ? teamName : "",
    enemyTeams: [],
    courses: state.courseNames,
    teamRanks: teamRanks,
    penalty: { [teamName]: state.penalty[teamName] || 0 }
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mk_team_${teamName}_${ts}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function applyReceivedState(record) {
  state.timestamp   = record.timestamp;
  state.teams       = record.teams;
  state.myTeam      = record.myTeam;
  state.enemyTeams  = record.enemyTeams;
  state.courseNames = record.courses;
  state.teamRanks   = record.teamRanks;
  state.penalty     = record.penalty || {};
  state.backgroundImage = record.backgroundImage || null;

  updateUIFromState();
}


/* ============================================================
   P2P（簡易版：BroadcastChannel）
============================================================ */

let p2pChannel = null;

function startP2PHost() {
  if (p2pChannel) p2pChannel.close();
  p2pChannel = new BroadcastChannel("mk_p2p");
  p2pChannel.onmessage = onP2PMessage;

  const status = document.getElementById("p2pStatus");
  if (status) status.textContent = "P2P ホストとして待機中（同一PC内の他タブと共有）";

  sendP2PState();
}

function startP2PClient() {
  if (p2pChannel) p2pChannel.close();
  p2pChannel = new BroadcastChannel("mk_p2p");
  p2pChannel.onmessage = onP2PMessage;

  const status = document.getElementById("p2pStatus");
  if (status) status.textContent = "P2P クライアントとして接続中（同一PC内の他タブと共有）";
}

function sendP2PState() {
  if (!p2pChannel) return;

  const data = {
    type: "state",
    payload: buildP2pSharedData()   // ★ P2P 用共有モードを反映
  };

  p2pChannel.postMessage(data);
}

function onP2PMessage(ev) {
  const msg = ev.data;
  if (!msg || msg.type !== "state") return;

  const p = msg.payload;

  const record = {
    timestamp: p.timestamp,
    teams: p.teams,
    myTeam: p.myTeam,
    enemyTeams: p.enemyTeams,
    courses: p.courses,
    teamRanks: p.teamRanks,
    penalty: p.penalty || {},
    backgroundImage: p.backgroundImage || null
  };

  // ★ IndexedDB を開く
  openDB().then(db => {
    const tx = db.transaction("history", "readonly");
    const store = tx.objectStore("history");
    const req = store.getAll();

    req.onsuccess = () => {
      const existing = req.result || [];

      // ★ 重複チェック
      if (isFullDataDuplicate(record, existing)) {
        const status = document.getElementById("p2pStatus");
        if (status) status.textContent = "P2P 受信データは既存データと重複しているため無視しました";
        return;
      }

      // ★ IndexedDB に保存
      const tx2 = db.transaction("history", "readwrite");
      const store2 = tx2.objectStore("history");
      store2.put({
        id: record.timestamp,
        ...record,
        source: "p2p"
      });

      // ★ state に反映
      state.timestamp   = record.timestamp;
      state.teams       = record.teams;
      state.myTeam      = record.myTeam;
      state.enemyTeams  = record.enemyTeams;
      state.courseNames = record.courses;
      state.teamRanks   = record.teamRanks;
      state.penalty     = record.penalty;
      state.backgroundImage = record.backgroundImage;

      setFormatFromMode(state.mode);
      updateScores();

      const status = document.getElementById("p2pStatus");
      if (status) status.textContent = "P2P でデータを受信しました（保存済み）";
    };
  });
}



/* ============================================================
   リザルト画像生成
============================================================ */

async function generateResultImage() {
  const canvas = document.getElementById("resultCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  // 背景画像がある場合
  if (state.backgroundImage) {
    const img = new Image();
    img.src = state.backgroundImage;
    await img.decode();
    ctx.drawImage(img, 0, 0, w, h);
  } else {
    // デフォルト背景
    ctx.fillStyle = "#8b0000"; // 濃い赤
    ctx.fillRect(0, 0, w, h);
  }

  // ここから先は既存の描画処理
  ctx.fillStyle = "#fff";
  ctx.font = "28px sans-serif";
  ctx.fillText("MK Result", 20, 40);

  const d = new Date(state.timestamp || Date.now());
  ctx.font = "16px sans-serif";
  ctx.fillText(d.toLocaleString(), 20, 70);
  ctx.fillText(`自チーム：${state.myTeam}`, 20, 95);

  const scores = calculateTeamScores();
  const ranking = Object.entries(scores).sort((a,b)=>b[1]-a[1]);

  ctx.font = "20px sans-serif";
  ctx.fillText("総合スコア", 20, 130);

  let y = 160;
  ranking.forEach(([team,score],i)=>{
    const diff = score - ranking[0][1];
    ctx.fillStyle = (team === state.myTeam) ? "#4caf50" : "#fff";
    ctx.fillText(`${i+1}位 ${team} ${score}点 ${diff===0?"":`(${diff})`}`, 40, y);
    y += 28;
  });

  const roundScores = calcRoundScores();
  ctx.fillStyle = "#fff";
  ctx.font = "18px sans-serif";
  ctx.fillText("ラウンド別スコア", 20, y + 20);

  let yy = y + 50;
  for (let r=0; r<totalRounds; r++) {
    const course = state.courseNames[r] || `R${r+1}`;
    ctx.font = "14px sans-serif";
    ctx.fillText(`${r+1}R ${course}`, 20, yy);
    let xx = 200;
    ranking.forEach(([team])=>{
      const s = roundScores[r][team];
      ctx.fillText(`${team}:${s}`, xx, yy);
      xx += 150;
    });
    yy += 22;
    if (yy > h - 40) break;
  }

  canvas.style.display = "block";
}



/* ============================================================
   共有保存（GAS）ダミー
============================================================ */

function sendHistoryToGAS() {
  // HTML の「この試合を共有保存」ボタン用ダミー
  // 必要になったら GAS_URL を使って実装する
  alert("共有保存（GAS）はまだ実装されていません");
}

const OVERLAY_GAS_URL = "https://script.google.com/macros/s/AKfycbzch_ygVCJzn1K2OD3sFHXE0dhrB45sifmCLJYsE9qvf6rRGhLHhcai95XxReOxXBE/exec"; // ← あなたの GAS URL

// ▼ 送信用チャンネルを作成
const bc = new BroadcastChannel("mk_overlay");

// ▼ overlay.html からの要求を受信
window.addEventListener("message", (event) => {
  if (event.data.type === "requestOverlay") {
    sendOverlay();
  }
});
let overlayWin = null;

function openOverlay() {
  overlayWin = window.open("overlay.html", "overlayWindow");
}


// ▼ overlay.html に途中経過を返す

function openOverlayWindow() {
  overlayWin = window.open("overlay.html", "overlayWindow");
}

async function sendOverlay(payload) {
  await fetch("https://script.google.com/macros/s/AKfycbzch_ygVCJzn1K2OD3sFHXE0dhrB45sifmCLJYsE9qvf6rRGhLHhcai95XxReOxXBE/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    mode: "no-cors"   // ★ GAS は CORS 不可なので必須
  });

  console.log("GAS へ送信完了");
}


/* ============================================================
   タブ初期化・起動
============================================================ */

function initTabs() {
  const tabs = document.querySelectorAll(".tabBtn");
  const contents = document.querySelectorAll(".tabContent");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;

      // ▼ タブ切り替え
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      contents.forEach(c => {
        c.style.display = (c.id === tab) ? "block" : "none";
      });

      // ▼ ★ 追加：Overlay タブのときだけ body にクラス付与
      if (tab === "overlayTab") {
        document.body.classList.add("overlay-mode");
      } else {
        document.body.classList.remove("overlay-mode");
      }
    });
  });
}


window.addEventListener("load", () => {
  initTabs();
  setFormatFromMode(state.mode);
  setupJSONDropArea();
  loadLocalHistory();
  loadWebhookSettings();   // ★ 追加
});
