const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 7 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m116.syncusercontent.com/mfs-60:748ee86393fbe584574eb2fe41cfc2e1=============================/p/Isekai.Meikyuu.De.Harem.O.S01e07.Unrated.Vostfr.1080P.Hdtv.X264.mp4?allowdd=0&datakey=ObpGiPamT588le+nxWLp5g9F7lE7aj3h9EU7tv5XRWyXYUZL39LvZkuXRjehA3Vk+9GbKP0yUEDBXwT9b2RhfSIqSqbGq3uZ3Fd2p5Js17Rcf6tA+7C5A29PCboj+AgUKhpQNxvjAClQfkMIrggPs9XaHvjriWshkSRweYa7efIJHZlT0CxtBtOFlQSYcFY7pyPhdelAFPH20o5OS4WHqZY85AnMuWlmrW1h+pvSaexrr7t/g8dkqbuO9EgXnYTSsoshepsfpVkAjA5Ol1/tDyEFoGmbXMrvwy3qJFP8MVWfVRrxvaPYYbTnGdobFBJIUTUcm0q2zJQtZydV68/3cA&engine=ln-2.3.7.3&errurl=dtsDJHf7EpUg9fIl+wWVECxjKwl+ey6OnVve4BYcUFbVaZKLnXTL8Jt9UOMP65svWvwm3dxcWAdptwk0jORsE5dzieNha0XIjlw3VzhWIP12gI4bY0+bSj73hKPle1HLzU4adD7wA7Od+h/EwiBiB22ZOPRh3+lTCC1QgQ36RNxUK04/hK3Jgiw5CPLZ6FOnTvhb/kxhXYheuYAw8XDQv8ZtkGvLBbUS5GYbXSLs63GTpljcodtNKBaFQPBBUMeIcdxdYvKv1nhNCLgnNzmp73SVs+cycUgakbj5BvZ/Yb5mFSRCNlDOhfl+J8MBnmELzQQrROk7TIrAtDTiiCZvEg==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iSXNla2FpLk1laWt5dXUuRGUuSGFyZW0uTy5TMDFlMDcuVW5yYXRlZC5Wb3N0ZnIuMTA4MFAuSGR0di5YMjY0Lm1wNCI7ZmlsZW5hbWUqPVVURi04JydJc2VrYWkuTWVpa3l1dS5EZS5IYXJlbS5PLlMwMWUwNy5VbnJhdGVkLlZvc3Rmci4xMDgwUC5IZHR2LlgyNjQubXA0Ow&ipaddress=1458994159&linkcachekey=834095eb0&linkoid=1546380013&mode=101&sharelink_id=8021205870013&timestamp=1672598078934&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=20b53e9924b6d15682b423bcd1300b8de2067cc4&cachekey=60:748ee86393fbe584574eb2fe41cfc2e1=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
