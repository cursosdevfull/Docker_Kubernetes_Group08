const p1 = document.querySelector("#message1");
const p2 = document.querySelector("#message2");

fetch("/api/config")
  .then((res) => res.json())
  .then((res) => {
    const pathBackend1 = res.backend1;

    fetch(pathBackend1)
      .then((res) => res.json())
      .then((res) => {
        p1.innerHTML = res.messageFromBackend1;
        p2.innerHTML = res.messageFromBackend2;
      });
  });
