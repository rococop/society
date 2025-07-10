const contentData = {
  plastic: "내용물을 비우고 깨끗이 헹군 후 투명봉투에 배출",
  paper: "이물질 제거 후 종류별로 분리 (신문, 책자, 포장지 등)",
  can: "물로 헹구고 가능한 압축하여 배출",
  glass: "병뚜껑을 제거하고 색깔별로 분리",
  styro: "음식물 흔적이 없도록 제거 후 배출",
  clothes: "마른 상태에서 재사용 가능한 것만 배출"
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
