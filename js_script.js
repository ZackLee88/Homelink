// 模擬房屋數據
const houses = [
    { id: 'house1', name: '房屋 1', location: '台北市' },
    { id: 'house2', name: '房屋 2', location: '台中市' },
  ];
  const reviews = [];
  
  // 顯示房屋列表
  const houseList = document.getElementById('house-list');
  houses.forEach(house => {
    const li = document.createElement('li');
    li.textContent = `${house.name} - ${house.location}`;
    houseList.appendChild(li);
  });
  
  // 處理評論提交
  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', event => {
    event.preventDefault();
    const houseId = document.getElementById('house').value;
    const comment = document.getElementById('comment').value;
    const rating = document.getElementById('rating').value;
  
    reviews.push({ houseId, comment, rating });
    displayReviews();
    reviewForm.reset();
  });
  
  // 顯示評論
  function displayReviews() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    reviews.forEach(review => {
      const li = document.createElement('li');
      const house = houses.find(h => h.id === review.houseId);
      li.textContent = `房屋: ${house.name}, 評分: ${review.rating}, 評論: ${review.comment}`;
      reviewList.appendChild(li);
    });
  }
  