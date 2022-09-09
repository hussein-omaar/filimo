import React from "react";
import "../components/comments.css";
import commenter from "../images/commenter.png";
function Comments() {
  return (
    <>
      <div className="comments">
        <div className="comments-title">
          <div className="line"></div>
          <h1>Commments</h1>
          <div className="line"></div>
        </div>
        <div className="feed">
          <div className="give-comment">
            <div className="comment-box">
              <input type="text" placeholder="Write your review here" />
              <div className="emojis">
                <i class="fa-sharp fa-solid fa-face-frown-open"></i>
                <i class="fa-sharp fa-solid fa-face-grin-hearts"></i>
                <i class="fa-sharp fa-solid fa-face-kiss-wink-heart"></i>
                <i class="fa-sharp fa-solid fa-face-laugh-wink"></i>
                <i class="fa-sharp fa-solid fa-face-laugh"></i>
                <i class="fa-sharp fa-solid fa-face-grin-tears"></i>
              </div>
            </div>
            <button className="btn">Submit</button>
          </div>
          <div className="public-comments">
            <div className="com">
              <div className="com-info">
                <div className="user-pro">
                  <img src={commenter} />
                </div>
                <div className="review">
                  <small>bruhperson</small>
                  <p>Re-Watched it 7 times and counting i guess i liked it </p>
                </div>
              </div>
              <div className="date">
                <span className="out-of">10/10</span>
                <span>21 Aug 2019</span>
              </div>
            </div>
            <div className="com">
              <div className="com-info">
                <div className="user-pro">
                  <img src={commenter} />
                </div>
                <div className="review">
                  <small>bruhperson</small>
                  <p>when you finish the show you will never be the same</p>
                </div>
              </div>
              <div className="date">
                <span className="out-of">10/10</span>
                <span>21 Aug 2019</span>
              </div>
            </div>
            <div className="com">
              <div className="com-info">
                <div className="user-pro">
                  <img src={commenter} />
                </div>
                <div className="review">
                  <small>bruhperson</small>
                  <p>
                    The best series i have seen in my whole life even better
                    than the wire{" "}
                  </p>
                </div>
              </div>
              <div className="date">
                <span className="out-of">10/10</span>
                <span>21 Aug 2019</span>
              </div>
            </div>
            <div className="com">
              <div className="com-info">
                <div className="user-pro">
                  <img src={commenter} />
                </div>
                <div className="review">
                  <small>bruhperson</small>
                  <p>
                    i wanna delete my brain the watch it againg like i never
                    knew it{" "}
                  </p>
                </div>
              </div>
              <div className="date">
                <span className="out-of">10/10</span>
                <span>21 Aug 2019</span>
              </div>
            </div>
            <div className="com">
              <div className="com-info">
                <div className="user-pro">
                  <img src={commenter} />
                </div>
                <div className="review">
                  <small>bruhperson</small>
                  <p>
                    The most perfect show ever created. There will no other show
                    like this{" "}
                  </p>
                </div>
              </div>
              <div className="date">
                <span>10/10</span>
                <span className="out-of">21 Aug 2019</span>
              </div>
            </div>
            <div className="more">
              <span>More</span>
              <i class="fa-sharp fa-solid fa-angles-down"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Comments;
