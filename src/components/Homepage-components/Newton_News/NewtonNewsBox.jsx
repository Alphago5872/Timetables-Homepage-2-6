import react from "react";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default function NewsBox() {
  return (
    <div className="newsBox">
      <div>
        <Box
          style={{
            backgroundColor: "#333",
            borderRadius: "11px",
            color: "#eee",
            height: "240px",

            padding: "12px",
            width: "var(--news-box-width)",
            // marginLeft: "33.8%",
            // display: "inline",
          }}
        >
          <div className="newsBox__news">
            <div>
              <h1>Now Opening!!! 9th Floor Campus</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel rhoncus ante. Curabitur bibendum libero mi, non tincidunt
                mauris vestibulum eget. Mauris bibendum ipsum vel vulputate
                commodo.
              </h2>
              <button>Learn More</button>
            </div>
          </div>
        </Box>
      </div>

      <div>
        <Box
          style={{
            backgroundColor: "#333",
            borderRadius: "11px",
            color: "#eee",
            height: "240px",

            padding: "12px",
            width: "var(--news-box-width)",
            display: "inline",
            position: "absolute",
            marginLeft: "31.35%",
            marginTop: "-240px",
          }}
        >
          <div className="newsBox__news">
            <div>
              <h1>Now Opening!!! 9th Floor Campus</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel rhoncus ante. Curabitur bibendum libero mi, non tincidunt
                mauris vestibulum eget. Mauris bibendum ipsum vel vulputate
                commodo.
              </h2>
              <button>Learn More</button>
            </div>
          </div>
        </Box>
      </div>

      <div>
        <Box
          style={{
            backgroundColor: "#333",
            borderRadius: "11px",
            color: "#eee",
            height: "240px",
            padding: "12px",
            width: "var(--news-box-width)",
            // marginLeft: "67.8%",
            display: "inline",
            position: "absolute",
            marginLeft: "64%",
            marginTop: "-240px",
          }}
        >
          <div className="newsBox__news">
            <div>
              <h1>Now Opening!!! 9th Floor Campus</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel rhoncus ante. Curabitur bibendum libero mi, non tincidunt
                mauris vestibulum eget. Mauris bibendum ipsum vel vulputate
                commodo.
              </h2>
              <button>Learn More</button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
