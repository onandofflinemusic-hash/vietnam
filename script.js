(function () {
  'use strict';
  const data = window.APP_DATA;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const storage = { inquiries: 'samsung-house-inquiries', repairs: 'samsung-house-repairs' };
  const t = (item) => `<span class="vi-text">${item.vi}</span><span class="ko-text">${item.ko}</span>`;

  function showStatus(node, message, isError) {
    node.hidden = false;
    node.textContent = message;
    node.classList.toggle('error', Boolean(isError));
  }

  function save(key, value) {
    const entries = JSON.parse(localStorage.getItem(key) || '[]');
    entries.push(value);
    localStorage.setItem(key, JSON.stringify(entries));
  }

  function renderHome() {
    $('#noticeText').innerHTML = `<span class="vi-text">${data.notice.vi}</span><span class="ko-text">${data.notice.ko}</span>`;
    $('#noticeDate').textContent = data.notice.date;
    $('#shortcutGrid').innerHTML = data.shortcuts.map((item) => `<a href="#${item.target}" class="shortcut"><span>${item.icon}</span>${t(item)}</a>`).join('');
    $('#facilityGrid').innerHTML = data.facilities.map((item) => `<article class="facility"><span>${item.icon}</span>${t(item)}<small>${item.note}</small></article>`).join('');
    $('#quickQuestions').innerHTML = ['월세는 어디로 입금하나요?', '쓰레기는 언제 버리나요?', '온수가 나오지 않아요.', '방을 직접 볼 수 있나요?'].map((q) => `<button type="button" data-question="${q}">${q}</button>`).join('');
  }

  function renderGuide(key) {
    const active = data.guideCategories.find((item) => item.key === key) || data.guideCategories[0];
    $('#guideTabs').innerHTML = data.guideCategories.map((item) => `<button class="${item.key === active.key ? 'active' : ''}" type="button" data-guide="${item.key}">${item.icon} ${t(item)}</button>`).join('');
    $('#guideList').innerHTML = `<article class="guide-item"><span class="guide-badge">지역 공용정보</span><h3><span class="vi-text">${active.vi}</span><span class="ko-text">${active.ko}</span></h3><p>실제 지역 정보가 아직 등록되지 않았습니다.</p><dl><div><dt>주소</dt><dd>관리자 입력 필요</dd></div><div><dt>전화번호</dt><dd>관리자 입력 필요</dd></div><div><dt>운영시간</dt><dd>관리자 입력 필요</dd></div><div><dt>마지막 확인일</dt><dd>관리자 입력 필요</dd></div></dl><div class="button-row"><span class="outline-btn disabled">전화하기</span><span class="outline-btn disabled">지도 보기</span></div></article>`;
  }

  function renderDetails() {
    $('#rulesList').innerHTML = data.rules.map((item) => `<article class="rule"><span>${item.icon}</span><div>${t(item)}<p><span class="vi-text">${item.textVi}</span><span class="ko-text">${item.textKo}</span></p></div></article>`).join('');
    $('#wasteList').innerHTML = data.waste.map((item) => `<article class="waste ${item.color}"><span>${item.icon}</span>${t(item)}<p><span class="vi-text">${item.textVi}</span><span class="ko-text">${item.textKo}</span></p></article>`).join('');
    $('#checkoutList').innerHTML = data.checkout.map((item) => `<li><b>${item[0]}</b><span>${item[1]}</span></li>`).join('');
  }

  function showAiAnswer(question) {
    const text = question.toLowerCase();
    const urgent = data.emergencyKeywords.some((word) => text.includes(word));
    const sample = data.aiSamples.find((item) => item.keys.some((word) => text.includes(word))) || data.aiSamples[0];
    const answer = $('#aiAnswer');
    answer.hidden = false;
    answer.innerHTML = urgent
      ? `<strong>긴급 상황일 수 있습니다.</strong><p>화재, 가스 냄새, 부상, 범죄는 119 또는 112에 먼저 연락해 주세요.</p><div class="button-row"><a class="solid-btn" href="tel:119">119</a><a class="solid-btn" href="tel:112">112</a><a class="outline-btn" href="#contact">관리자 연락</a></div>`
      : `<strong>AI 생활도우미 샘플 답변</strong><p><span class="vi-text">${sample.vi}</span><span class="ko-text">${sample.ko}</span></p><a class="outline-btn" href="#${sample.target}">관련 페이지 보기</a>`;
  }

  function showAiApiAnswer(message) {
    const answer = $('#aiAnswer');
    answer.hidden = false;
    answer.replaceChildren();
    const title = document.createElement('strong');
    const body = document.createElement('p');
    title.textContent = 'AI 생활도우미 답변';
    body.textContent = message;
    answer.append(title, body);
  }

  function getChatAnswer(payload) {
    const candidates = [
      payload && payload.answer,
      payload && payload.message,
      payload && payload.reply,
      payload && payload.text,
      payload && payload.response,
      payload && payload.response && payload.response.text,
      payload && payload.data && payload.data.answer
    ];
    const answer = candidates.find((value) => typeof value === 'string' && value.trim());
    return answer ? answer.trim() : '';
  }

  function validate(form) {
    const required = Array.from(form.querySelectorAll('[required]'));
    const missing = required.find((field) => !String(field.value).trim());
    if (missing) {
      missing.focus();
      return missing.closest('label')?.firstChild.textContent.trim() || '필수 항목';
    }
    return '';
  }

  function wireEvents() {
    let isAskingAi = false;
    const menu = $('#sideMenu');
    $('.menu-toggle').addEventListener('click', () => { menu.hidden = false; $('.menu-toggle').setAttribute('aria-expanded', 'true'); });
    $('.close-menu').addEventListener('click', () => { menu.hidden = true; $('.menu-toggle').setAttribute('aria-expanded', 'false'); });
    menu.addEventListener('click', (event) => { if (event.target === menu || event.target.matches('a')) menu.hidden = true; });
    $('#languageToggle').addEventListener('click', () => {
      const koreanFirst = document.body.classList.toggle('ko-priority');
      $('#languageToggle').textContent = koreanFirst ? 'Tiếng Việt 우선 보기' : '한국어 우선 보기';
      document.documentElement.lang = koreanFirst ? 'ko' : 'vi';
      localStorage.setItem('samsung-house-language', koreanFirst ? 'ko' : 'vi');
    });
    $$('[data-scroll-target]').forEach((button) => button.addEventListener('click', () => $(`#${button.dataset.scrollTarget}`).scrollIntoView({ behavior: 'smooth' })));
    const askAi = async (question) => {
      const query = String(question || '').trim();
      const button = $('#aiAskBtn');
      const input = $('#aiQuery');
      if (!query || isAskingAi) return;

      isAskingAi = true;
      button.disabled = true;
      input.setAttribute('aria-busy', 'true');
      showAiApiAnswer('답변을 생성하고 있습니다...');
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ message: query })
        });
        if (!response.ok) throw new Error(`Chat request failed: ${response.status}`);
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) throw new Error('Chat response was not JSON');
        const answer = getChatAnswer(await response.json());
        if (!answer) throw new Error('Chat response did not include an answer');
        showAiApiAnswer(answer);
      } catch (error) {
        console.error('Chat request failed.', error);
        showAiApiAnswer('답변을 가져오지 못했습니다. 잠시 후 다시 시도해 주세요.');
      } finally {
        isAskingAi = false;
        button.disabled = false;
        input.removeAttribute('aria-busy');
      }
    };
    $('#aiAskBtn').addEventListener('click', () => askAi($('#aiQuery').value));
    $('#aiQuery').addEventListener('keydown', (event) => { if (event.key === 'Enter') { event.preventDefault(); $('#aiAskBtn').click(); } });
    document.addEventListener('click', (event) => {
      const question = event.target.closest('[data-question]');
      if (question) { $('#aiQuery').value = question.dataset.question; askAi(question.dataset.question); }
      const guide = event.target.closest('[data-guide]');
      if (guide) renderGuide(guide.dataset.guide);
    });
    $('#copyAccountBtn').addEventListener('click', () => showStatus($('#inquiryStatus'), '계좌번호는 관리자 입력 필요 상태입니다. 실제 정보가 등록되면 복사할 수 있습니다.', true));
    $('#inquiryForm').addEventListener('submit', (event) => {
      event.preventDefault(); const error = validate(event.currentTarget);
      if (error) return showStatus($('#inquiryStatus'), `${error} 항목을 입력해 주세요.`, true);
      save(storage.inquiries, Object.fromEntries(new FormData(event.currentTarget))); event.currentTarget.reset();
      showStatus($('#inquiryStatus'), '입실 문의가 접수되었습니다. 관리자가 확인한 후 전화 또는 메시지로 연락드립니다. 문의 접수는 객실 예약이나 입실 확정을 의미하지 않습니다.');
    });
    $('#repairForm').addEventListener('submit', (event) => {
      event.preventDefault(); const error = validate(event.currentTarget);
      if (error) return showStatus($('#repairStatus'), `${error} 항목을 입력해 주세요.`, true);
      const values = Object.fromEntries(new FormData(event.currentTarget)); delete values.photo; save(storage.repairs, { ...values, status: '접수 완료' }); event.currentTarget.reset();
      showStatus($('#repairStatus'), '수리 요청이 접수되었습니다. 상태: 접수 완료 → 확인 중 → 처리 완료');
    });
    window.addEventListener('hashchange', setActiveNav);
  }

  function setActiveNav() {
    const id = location.hash.slice(1) || 'home';
    $$('[data-nav]').forEach((link) => link.classList.toggle('active', link.dataset.nav === id));
  }

  // 실제 GPT 연동 위치: API 키는 프론트엔드에 저장하지 않습니다.
  // 별도 백엔드 또는 서버리스 API에서 등록된 숙소·지역정보만 검색하고,
  // AI가 계좌, 비용, 주소, 빈방 여부를 임의 생성하지 않도록 제한합니다.
  if (localStorage.getItem('samsung-house-language') === 'ko') {
    document.body.classList.add('ko-priority');
    document.documentElement.lang = 'ko';
  }
  renderHome(); renderGuide('hospital'); renderDetails(); wireEvents(); setActiveNav();
}());
