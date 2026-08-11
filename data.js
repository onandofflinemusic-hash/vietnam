window.APP_DATA = {
  notice: {
    date: '2026.08.10',
    ko: '소방시설 점검 안내입니다. 자세한 시간은 관리자 확인이 필요합니다.',
    vi: 'Thong bao kiem tra thiet bi phong chay. Can xac nhan thoi gian voi quan ly.'
  },
  facilities: [
    { icon: '⌁', ko: 'Wi-Fi 무료', vi: 'Wi-Fi mien phi', note: '관리자 확인 필요' },
    { icon: '◉', ko: '세탁기 이용', vi: 'Su dung may giat', note: '관리자 안내 확인' },
    { icon: '♨', ko: '주방 이용', vi: 'Su dung bep chung', note: '생활수칙 확인' },
    { icon: '▣', ko: '출입 관리', vi: 'Kiem soat ra vao', note: '안전한 공동생활' },
    { icon: '❄', ko: '냉난방', vi: 'Dieu hoa / suoi', note: '객실별 상이' },
    { icon: '◌', ko: '화장실', vi: 'Nha ve sinh', note: '객실별 상이' }
  ],
  shortcuts: [
    { icon: '☏', target: 'inquiry', ko: '입실 문의', vi: 'Hoi ve phong' },
    { icon: '▣', target: 'payment', ko: '월세·계좌', vi: 'Tien phong' },
    { icon: '✓', target: 'rules', ko: '생활수칙', vi: 'Noi quy' },
    { icon: '⚒', target: 'repair', ko: '수리 요청', vi: 'Sua chua' },
    { icon: '☎', target: 'contact', ko: '관리자 연락', vi: 'Lien he quan ly' }
  ],
  faqs: [
    { ko: '방을 직접 볼 수 있나요?', vi: 'Toi co the xem phong truc tiep khong?', answerKo: '공간소개를 확인한 뒤 입실 문의를 남겨 주세요. 방문 일정은 관리자와 협의합니다.', answerVi: 'Hay xem gioi thieu phong va gui yeu cau. Lich tham phong se duoc thoa thuan voi quan ly.' },
    { ko: '자동 예약이 되나요?', vi: 'Co the dat phong tu dong khong?', answerKo: '아니요. 문의 접수 후 관리자가 확인하고 연락드립니다.', answerVi: 'Khong. Quan ly se kiem tra va lien he sau khi nhan yeu cau.' },
    { ko: '개인 신분증 번호가 필요한가요?', vi: 'Co can so giay to tuy than khong?', answerKo: '이 시제품에서는 여권번호나 외국인등록번호를 받지 않습니다.', answerVi: 'Ban mau nay khong thu so ho chieu hay so dang ky nguoi nuoc ngoai.' }
  ],
  guideCategories: [
    { key: 'hospital', icon: '✚', ko: '병원·약국', vi: 'Benh vien·nha thuoc' },
    { key: 'transport', icon: '⌁', ko: '버스·택시', vi: 'Xe buyt·taxi' },
    { key: 'bank', icon: '▣', ko: '은행·ATM', vi: 'Ngan hang·ATM' },
    { key: 'admin', icon: '▤', ko: '외국인등록·행정업무', vi: 'Dang ky nguoi nuoc ngoai' },
    { key: 'support', icon: '♡', ko: '근로자 지원기관', vi: 'Ho tro nguoi lao dong' },
    { key: 'market', icon: '⌂', ko: '마트·생활편의', vi: 'Sieu thi·tien ich' },
    { key: 'mobile', icon: '◫', ko: '휴대전화 개통·충전', vi: 'Dien thoai·nap tien' },
    { key: 'phrase', icon: 'Aa', ko: '한국 생활 표현', vi: 'Cau noi can thiet' },
    { key: 'help', icon: '!', ko: '통역·도움 요청', vi: 'Phien dich·tro giup' }
  ],
  rules: [
    { icon: '❄', ko: '냉장고 사용 주의', vi: 'Luu y tu lanh', textKo: '음식물은 이름을 적어 정리하고 오래 두지 말아 주세요.', textVi: 'Hay ghi ten va don thuc pham, khong de qua lau.' },
    { icon: '◉', ko: '세탁기 사용 주의', vi: 'Luu y may giat', textKo: '사용량과 이용 시간을 관리자 안내에 맞춰 주세요.', textVi: 'Hay dung theo huong dan cua quan ly.' },
    { icon: '♨', ko: '가스레인지 사용 주의', vi: 'Luu y bep gas', textKo: '가스 냄새가 나면 사용을 멈추고 긴급 연락을 우선해 주세요.', textVi: 'Neu ngui thay mui gas, dung su dung va lien lac khan cap.' },
    { icon: '⌂', ko: '청소와 화장실', vi: 'Ve sinh phong va toilet', textKo: '티슈와 이물질은 변기에 버리지 말아 주세요.', textVi: 'Khong bo khan giay hay vat la vao bon cau.' },
    { icon: '▾', ko: '기름 분리배출', vi: 'Phan loai dau mo', textKo: '생선·고기·식용유는 하수구가 아닌 지정된 기름 분리통에 버려 주세요.', textVi: 'Dau ca, dau thit va dau an hay bo vao thung quy dinh, khong do xuong cong.' },
    { icon: '⌘', ko: '열쇠와 도어락', vi: 'Chia khoa va khoa cua', textKo: '열쇠를 잃으면 관리자에게 연락하고, 문을 강제로 열거나 도어락을 분해하지 말아 주세요.', textVi: 'Mat chia khoa thi bao quan ly. Khong pha cua hoac tu thao khoa.' }
  ],
  waste: [
    { color: 'general', icon: '●', ko: '일반쓰레기', vi: 'Rac thuong', textKo: '종량제 봉투 사용 여부는 관리자 입력 필요', textVi: 'Can quan ly nhap thong tin tui rac quy dinh' },
    { color: 'food', icon: '◒', ko: '음식물쓰레기', vi: 'Rac thuc pham', textKo: '물기를 비운 뒤 지정 용기에 배출', textVi: 'Bo nuoc truoc khi bo vao dung cu quy dinh' },
    { color: 'recycle', icon: '↻', ko: '재활용품', vi: 'Tai che', textKo: '병·캔·플라스틱·종이를 구분', textVi: 'Phan loai chai, lon, nhua va giay' },
    { color: 'large', icon: '□', ko: '대형폐기물', vi: 'Rac kich thuoc lon', textKo: '배출 전 관리자에게 문의', textVi: 'Hoi quan ly truoc khi bo' }
  ],
  checkout: [
    ['퇴실 예정일 알리기', 'Thong bao ngay du kien tra phong'],
    ['미납 월세와 관리비 확인', 'Kiem tra tien phong va phi quan ly'],
    ['공과금 확인', 'Kiem tra dien, nuoc, gas'],
    ['객실 상태 확인', 'Kiem tra tinh trang phong'],
    ['개인 물건과 쓰레기 정리', 'Don do ca nhan va rac'],
    ['냉장고 음식물 정리', 'Don thuc pham trong tu lanh'],
    ['열쇠 반납', 'Tra chia khoa'],
    ['시설 파손 확인', 'Kiem tra hu hong'],
    ['최종 정산', 'Thanh toan cuoi cung'],
    ['보증금 반환', 'Hoan tra tien dat coc']
  ],
  aiSamples: [
    { keys: ['월세', '입금', '계좌'], ko: '월세·계좌 정보는 관리자 등록 전까지 확인할 수 없습니다. 월세·계좌 메뉴를 확인하거나 관리자에게 문의해 주세요.', vi: 'Thong tin tien phong va tai khoan can quan ly cap nhat. Hay xem muc tien phong hoac lien he quan ly.', target: 'payment' },
    { keys: ['쓰레기', '버리'], ko: '분리수거 메뉴에서 종류별 배출 방법과 관리자 입력 필요 항목을 확인해 주세요.', vi: 'Hay xem muc phan loai rac de kiem tra cach bo tung loai rac.', target: 'waste' },
    { keys: ['온수', '고장', '수리'], ko: '수리 요청을 남겨 주세요. 관리자가 확인 후 접수 완료 → 확인 중 → 처리 완료 순서로 안내합니다.', vi: 'Hay gui yeu cau sua chua. Quan ly se cap nhat trang thai sau khi kiem tra.', target: 'repair' },
    { keys: ['열쇠', '키'], ko: '문을 강제로 열지 말고 관리자에게 먼저 연락해 주세요.', vi: 'Khong pha cua. Hay lien he quan ly truoc tien.', target: 'contact' },
    { keys: ['방', '빈방', '직접'], ko: '공간소개를 확인한 뒤 입실 문의를 남겨 주세요. 방문 날짜는 관리자와 협의합니다.', vi: 'Hay xem gioi thieu phong va gui yeu cau. Ngay tham phong se duoc thoa thuan voi quan ly.', target: 'inquiry' },
    { keys: ['병원', '버스', '택시'], ko: '지역생활 안내에서 필요한 항목을 선택해 주세요. 실제 정보가 없는 항목은 관리자 입력 필요로 표시됩니다.', vi: 'Hay chon muc can thiet trong huong dan khu vuc. Muc chua co du lieu se hien can quan ly nhap.', target: 'guide' },
    { keys: ['퇴실'], ko: '퇴실·방세 정산 절차를 확인해 주세요. 퇴실 신청만으로 정산이 끝나지 않으며 관리자 확인이 필요합니다.', vi: 'Hay xem quy trinh tra phong. Can quan ly xac nhan, chi gui don chua hoan tat thanh toan.', target: 'checkout' }
  ],
  emergencyKeywords: ['화재', '가스', '부상', '범죄', '불', '사고', '119', '112']
};
