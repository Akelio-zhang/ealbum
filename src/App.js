import React from 'react';
import './App.css';
import { Carousel } from 'antd';

// 样式给定
const contentStyle = {
  height: '100vh',
  color: '#fff',
  textAlign: 'center',
  background: '#FFECF1',
};

// 随机获取其中的N张.
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

// 所有照片都放到public/pics下方.
const allPics = [
  "911.jpg",
  "car.jpg",
  "etron-gt.webp"
]

// ablum展示代码逻辑
const App = () => {

  const picList = getRandomArrayElements(allPics, 3);
  console.log(picList);

  const picItems = picList.map((pic, index) => {
    return (
      <div>
        <h3 style={contentStyle}>
          <img src={process.env.PUBLIC_URL+"pics/"+pic}  />
        </h3>
      </div>
    )
  });

  return (
    <div className="App">
        <Carousel autoplay>
          {picItems}
        </Carousel>
    </div>
  );
}

export default App;
