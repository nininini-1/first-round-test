import logo from "./logo.svg";
import "./App.css";
import MySimpleModal from "./components/MySimpleModal";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useThrottle from "./hooks/useThrottle";
import arrange from "./utils/arrange";
import convert from "./utils/convert";
import Code from "./components/Code";

const App = () => {
  const [visible, setVisible] = useState(false);
  const debounceHandleClick = useDebounce(() => {
    console.log("我是防抖");
  }, 2000);

  const throttleHandleClick = useThrottle(() => {
    console.log("我是节流");
  }, 2000);

  console.log(
    arrange([
      ["1", "2"],
      ["3", "4", "5"],
    ])
  );

  console.log(
    convert([
      { id: 3, parent: 2 },

      { id: 1, parent: null },

      { id: 2, parent: 1 },
    ])
  );

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h3>Modal</h3>
        <button onClick={() => setVisible(true)}>Show Modal</button>
        <MySimpleModal visible={visible} onClose={() => setVisible(false)}>
          <p>content...</p>
          <p>content...</p>
          <p>content...</p>
        </MySimpleModal>
      </div>
      <div>
        <h3>防抖</h3>
        <button onClick={debounceHandleClick}>点我</button>
        <h3>节流</h3>
        <button onClick={throttleHandleClick}>点我</button>
      </div>

      <div>
        <h3>全排列</h3>
        <Code>
          {`
            // 全排列
            const arrange = (list = [[]]) =>
              list.reduce(
                (preList, list) =>
                  preList.flatMap((prev) => list.map((v) => prev.concat(v))),
                [[]]
              );
          `}
        </Code>
      </div>
      <div>
        <h3>树形结构对象</h3>
        <Code>
          {`
            // 树形结构对象
            const convert = (list = []) => {
              const res = [];
              const map = list.reduce((res, v) => ((res[v.id] = v), res), {});
              for (const item of list) {
                if (!item.parent) {
                  res.push(item);
                  continue;
                }
                if (item.parent in map) {
                  const p = map[item.parent];
                  p.children = p.children || [];
                  p.children.push(item);
                }
              }
              return res;
            };
          `}
        </Code>
      </div>
    </div>
  );
};

export default App;
