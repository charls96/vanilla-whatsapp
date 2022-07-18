(function () {
  const vanillaWhatsapp = (
    data = {
      phoneNumber: "3432132132",
      positionButtonWhatsapp: {
        top: "",
        right: "30%",
        bottom: "2%",
        left: "",
      },
      images: {
        pathUserLogo: "",
      },
      replaceText: {
        header: {
          userName: "User name",
          slogan: "Usually responds the same day",
        },
        bodyChat: {
          messageOne: "Hello 👋",
          messageTwo: "How can I help you?",
        },
        linkToWhatsappButtonText: "Send message",
      },
    }
  ) => {
   const btnWhatsappContent = `
    <div class="btn-whatsapp" style="top: ${data.positionButtonWhatsapp.top}; right: ${data.positionButtonWhatsapp.right}; bottom: ${data.positionButtonWhatsapp.bottom}; left: ${data.positionButtonWhatsapp.left}">
        <div class="whatsapp-position" style="position: relative;">
            <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" style=" fill:#000000;"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path></svg>
            <span class="red-circle-whatsapp"></span>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML( 'beforeend', btnWhatsappContent )

    const whatsappPosition = document.querySelector(".whatsapp-position");
    const divChatWhatsapp = document.createElement("div");
    const divChatWhatsappTriangle = document.createElement("div");

    divChatWhatsapp.classList.add("div-chat-whatsapp");
    divChatWhatsappTriangle.classList.add("div-chat-whatsapp-triangle");

    const divChatWhatsappContent = `
          <div class="header-whatsapp">
                  <div class="header-logo-whatsapp">
                      ${
                        data.images.pathUserLogo
                          ? '<img class="img-user-whatsapp" src="' +
                            data.images.pathUserLogo +
                            '" alt="logoWhatsapp" />'
                          : '<svg xmlns="http://www.w3.org/2000/svg" class="img-user-whatsapp" viewBox="0 0 512 512"><title>Person Circle</title><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>'
                      }
                    <div class="header-texts-whatsapp">
                        <p class="header-whatsapp-name">${
                          data.replaceText.header.userName
                        }</p>
                        <p class="header-whatsapp-subtext">${
                          data.replaceText.header.slogan
                        }</p>
                    </div>
                  </div>
                  <svg class="whatsapp-cross" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.7em" height="0.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="lightgray" d="M50.592 2.291L32 20.884C25.803 14.689 19.604 8.488 13.406 2.291c-7.17-7.17-18.284 3.948-11.12 11.12c6.199 6.193 12.4 12.395 18.592 18.592A32589.37 32589.37 0 0 1 2.286 50.595c-7.164 7.168 3.951 18.283 11.12 11.12c6.197-6.199 12.396-12.399 18.593-18.594l18.592 18.594c7.17 7.168 18.287-3.951 11.12-11.12c-6.199-6.199-12.396-12.396-18.597-18.594c6.2-6.199 12.397-12.398 18.597-18.596c7.168-7.166-3.949-18.284-11.12-11.11"/></svg>
                </div>
                
                <div class="body-whatsapp">
                    <div class="conversation-whatsapp">
                      <p class="whatsapp-name">${
                        data.replaceText.header.userName
                      }</p>
                      <p>${data.replaceText.bodyChat.messageOne}</p>
                      <p>${data.replaceText.bodyChat.messageTwo}</p>
                    </div>
                </div>
                <div class="footer-whatsapp">
                <svg width="1em" height="1em" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd" class="WhatsappButton__Icon-sc-7zv9k4-0 bOSBBe"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg> 
                        <a href="https://wa.me/${
                          data.phoneNumber
                        }" target="_blank">${
      data.replaceText.linkToWhatsappButtonText
    }</a>
              <div>
            `;
    divChatWhatsapp.insertAdjacentHTML('beforeend', divChatWhatsappContent)

    whatsappPosition.appendChild(divChatWhatsapp);
    whatsappPosition.appendChild(divChatWhatsappTriangle);

    const svgCrossWhatsapp = document.querySelector(".whatsapp-cross");

    svgCrossWhatsapp.addEventListener("click", (e) => {
      e.preventDefault();
      divChatWhatsapp.classList.remove("open");
      divChatWhatsappTriangle.classList.remove("open");
    });

    const iconWhatsapp = document.querySelector(".whatsapp-icon");
    iconWhatsapp.addEventListener("click", showChatWhatsapp);

    function showChatWhatsapp(e) {
      e.preventDefault();
      if (divChatWhatsapp.classList.contains("open")) {
        divChatWhatsapp.classList.remove("open");
        divChatWhatsappTriangle.classList.remove("open");
      } else {
        divChatWhatsapp.classList.add("open");
        divChatWhatsappTriangle.classList.add("open");
      }
    }

    document.addEventListener("click", (e) => {
      if (
        e.target !== divChatWhatsapp &&
        !e.path.includes(document.querySelector(".whatsapp-icon")) &&
        !divChatWhatsapp.contains(e.target)
      ) {
        divChatWhatsapp.classList.remove("open");
        divChatWhatsappTriangle.classList.remove("open");
      }
    });
  };

  const init = 'initVanillaWhatsapp';

  if (typeof window !== "undefined" && typeof window[init] !== "function") {
    window[init] = vanillaWhatsapp;
  }
})();
