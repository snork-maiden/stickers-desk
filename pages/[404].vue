<template>
    <section class="not-found-container">
      <div class="not-found-message">
        Страница не найдена
      </div>
    </section>
  </template>
  
  <style scoped lang="scss">
  .not-found-container {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
    overflow: hidden;
  
    &::before {
      content: '404';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: min(40vw, 30rem);
      font-weight: bold;
      color: rgba(65, 157, 160, 0.05); 
      z-index: 0; 
      pointer-events: none;
      user-select: none;
    }
  }
  
  .not-found-message {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
  }
  </style>
  