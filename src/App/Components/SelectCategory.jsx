import { Select, Divider, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useRef } from "react";

const { Option } = Select;

let index = 0;

function SelectCategory() {
  const [items, setitems] = useState(["Category I", "Category II"]);
  const [newCategory, setNewCategory] = useState({ name: "", desc: "" });
  const onNameChange = (event, name) => {
    setNewCategory((pre) => ({ ...pre, [name]: event.target.value }));
  };

  const addItem = () => {
    console.log("addItem");
    setitems([...items, newCategory.name]);
    setNewCategory({ name: "", desc: "" });
  };
  return (
    <Select
      style={{ width: 240 }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: "4px 0" }} />
          <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
            <Input
              style={{ flex: "auto" }}
              placeholder="title"
              value={newCategory.name}
              onChange={(event) => onNameChange(event, "name")}
            />
            <Input
              style={{ flex: "auto" }}
              placeholder="description"
              value={newCategory.desc}
              onChange={(event) => onNameChange(event, "desc")}
            />

            <a
              style={{
                flex: "none",
                padding: "8px",
                display: "block",
                cursor: "pointer",
              }}
              onClick={addItem}
            >
              <PlusOutlined /> Add item
            </a>
          </div>
        </div>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
  );
}

export default SelectCategory;

