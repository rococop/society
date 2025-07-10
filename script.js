const contentData = {
  plastic: "내용물을 비우고 깨끗이 헹군 후 투명봉투에 배출 \n -무색 투명한 먹는샘물, 음료 폴리에틸렌테레프탈레이트(PET)병",
  paper: "이물질 제거 후 종류별로 분리 \n -종이팩, 신문지, 책자, 노트, 전단지, 종이컵, 기타 종이류",
  can: "물로 헹구고 가능한 압축하여 배출 \n -음료, 주류캔, 식료품캔, 부탄가스, 기타캔류",
  glass: "병뚜껑을 제거하고 색깔별로 분리 \n -음료수병, 기타병",
  styro: "부착상표 등 스티로폼과 다른 재질은 제거한 후 배출 \n -스티로폼 완충재, 농·수·축산물 포장용 발포스티렌상자 \n -비해당 품목: 타 재질과 코팅 또는 접착된 발포스티렌, 건축용 내·외장재 스티로폼, 음식물이 묻어 있거나 이물질을 제거하기 어려운 경우등은 종량제봉투, 특수규격마대 또는 대형폐기물 처리 등 지자체 조례에 따라 배출은 종량제봉투, 특수규격마대에 넣어 배출하거나 대형폐기물로 처리하는 등 지방자치단체 조례에 따라 배출 ",
  clothes: "마른 상태에서 재사용 가능한 것만 배출 \n -식물성 섬유(면, 마 등), 동물성 섬유(울, 모직 등), 합성섬유(폴리에스테르, 나일론, 아크릴, 폴리우레탄 등)기타 합성섬유류",
  elec: "전지를 제품에서 분리하여 배출 \n -수은전지, 산화은전지, 니켈 ·카드뮴전지, 리튬 1차전지, 망간전지알칼리망간전지, 니켈 수소전지",
  light: "지자체별 형광등 분리 배출 용기에 배출 \n -직관형(FL), 환형(FCL), 안정기 내장형(CFL), 콤팩트형(FPL), 기타 수은을 함유한 조명제품"
};


window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".menu-item");
  const contentBox = document.getElementById("content-box");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const key = item.getAttribute("data-key");
      contentBox.innerHTML = `<p>${contentData[key]}</p>`;
    });
    item.addEventListener("mouseleave", () => {
      contentBox.innerHTML = `<p>왼쪽 메뉴에 마우스를 올리면 분리수거 방법이 여기에 표시됩니다.</p>`;
    });
  });
});
