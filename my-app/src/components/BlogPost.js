import React, { useState } from "react";
import PageLayout from "./common/PageLayout";
import { useSpeechSynthesis } from "react-speech-kit";
import {
  Heart,
  HeartFill,
  VolumeUp,
  VolumeUpFill,
} from "react-bootstrap-icons";


function BlogPost() {
  const [isLiked, setIsLiked] = useState(false);
  const [isVolumeOn, setIsVolumeOn] = useState(false);
  const { speak } = useSpeechSynthesis();
  const voiceHandler = () => {
    setIsVolumeOn(true);
    speak(
      {
        text: "hello there You can find (just about) anything on Quarks — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new? thanks",
      }
    );
  };

  return (
    <div>
      <PageLayout
        LeftComponent={
          <>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
            <div className="row ">
              <div className="col-6 likeBtn">
                {!isLiked ? (
                  <Heart
                    size={26}
                    onClick={() => {
                      setIsLiked(true);
                    }}
                  />
                ) : (
                  <HeartFill size={26} color={"red"} />
                )}
                <span>23 likes</span>
              </div>
              <div className="col-6 textToSpeech d-flex justify-content-end pe-4">
                {!isVolumeOn ? (
                  <VolumeUp size={26} onClick={voiceHandler} />
                ) : (
                  <VolumeUpFill size={26} />
                )}
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              eius voluptatum suscipit error, doloremque blanditiis distinctio
              autem quasi neque ex labore quam voluptate laboriosam,
              perspiciatis fuga molestiae? Earum exercitationem et consequatur
              rem hic iure soluta minima eius iste atque optio a mollitia iusto
              accusantium possimus animi, sunt fuga! Minus cupiditate eligendi
              adipisci facilis reiciendis tenetur minima quidem. Natus ipsa
              eligendi facere, modi cupiditate consequuntur aliquam nobis iusto
              ipsum saepe reprehenderit dicta alias ducimus, aperiam doloribus,
              eius eum labore porro? Molestiae, similique autem nihil quas
              aliquam atque perspiciatis corporis officiis culpa ab deleniti
              reprehenderit, odio maiores. Officia, totam magni. Autem sed
              cupiditate quaerat rerum commodi laudantium expedita reiciendis
              perspiciatis molestias porro laboriosam vero, itaque hic, animi
              odio voluptatibus repudiandae. Magni, doloremque.
            </p>
          </>
        }
      />
    </div>
  );
}

export default BlogPost;
