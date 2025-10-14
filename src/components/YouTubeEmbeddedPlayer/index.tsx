import styles from "./styles.module.css";

type YouTubeEmbeddedPlayerProps = {
  videoTitle: string;
  videoId: string;
};

const YouTubeEmbeddedPlayer = ({
  videoTitle,
  videoId,
}: YouTubeEmbeddedPlayerProps) => {
  const videoSrc = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <div className={styles.container}>
      <iframe
        className={styles.responsiveIframe}
        src={videoSrc}
        title={videoTitle}
        name="YouTube Embedded Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbeddedPlayer;

/*

# Usage Example

```
import YouTubeEmbeddedPlayer from "@site/src/components/YouTubeEmbeddedPlayer";

<YouTubeEmbeddedPlayer
  videoTitle="The Complete Cybersecurity Roadmap: Land a Cybersecurity Job in 10 Months"
  videoId="v7BNtpw53AA"
/>
```

*/
