const onlyDisplayResults = () => {
  document.getElementById('test').style.display = 'unset';
  document.getElementById('home').style.display = 'none';
};

const onlyDisplayHome = () => {
  document.getElementById('test').style.display = 'none';
  document.getElementById('home').style.display = 'unset';
};

export { onlyDisplayResults, onlyDisplayHome };
