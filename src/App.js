import logo from './logo.svg';
import './App.css';
import Editor from "./Editor";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import /* codemirror XML (HTML) mode */
import /* codemirror CSS mode */
import /* codemirror JS mode */

function App() {
  return (
    <div className="pane top-pane">
        <Editor /*HTML code editor*//>  
        <Editor /*CSS code editor*//>
        <Editor /*JS code editor*//>
</div>

  <div className="bottom-pane">
  <iframe
    srcDoc={srcDoc}
    /*Title option*/
    /*sandbox option*/
    /*frameBorder option*/
    /*width-height option*/
    /*Title option*/
  ></iframe>
  </div>
  );
}

export default App;
