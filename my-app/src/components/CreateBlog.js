import React, { Component, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.js";
import { useNavigate } from "react-router-dom";
function CreateBlog() {
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div className="container createBlog">
      <div className="row text-center my-4">
        <h1>Create a Post</h1>
      </div>
      <div className="row ">
        <div className="col-12" style={{}}>
          <Editor
            style={{ border: "2px solid red" }}
            toolbar={{
              //   options: [
              //     "inline",
              //     "blockType",
              //     "fontSize",
              //     "fontFamily",
              //     "list",
              //     "textAlign",
              //     "colorPicker",
              //     "link",
              //     "embedded",
              //     "emoji",
              //     "image",
              //     "remove",
              //     "history",
              //   ],
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                // uploadCallback: uploadImageCallback,
                alt: { present: true },
                previewImage: false,
                inputAccept:
                  "image/gif,image/jpeg,image/jpg,image/png,image/svg",
              },
              fontSize: {
                options: [
                  8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96,
                ],
              },
            }}
            defaultEditorState={editorState}
            editorState={editorState}
            toolbarClassName="toolbar-class"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            onEditorStateChange={(editorState) => {
              setEditorState(editorState);
              console.log(editorState.getCurrentContent());
            }}

            // onEditorStateChange={this.onEditorStateChange}
          />
          {/* <EditorContainer /> */}
          {/* <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          /> */}
        </div>
      </div>
      <div className="row justify-content-center align-items-center my-5 text-center">
        <div className="col-md-2 col-6">
          <button
            className="btn btn-light"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Cancel
          </button>
        </div>
        <div className=" col-md-2 col-6">
          <button className="btn btn-dark">Publish</button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
