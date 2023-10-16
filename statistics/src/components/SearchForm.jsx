import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormLabel } from "react-bootstrap";
const theJson = require("../taiwan_districts.json");

const SearchForm = ({
  search,
  setSearch,
  grab,
  clear,
  checkvalue,
  setChecknalue,
}) => {
  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from(
    { length: currentYear - 2017 },
    (_, index) => 2018 + index
  );

  const normalChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const onRadioChange = (e) => {
    const { name, checked, value } = e.target;
    setChecknalue(value);
    if (checked) {
      setSearch({ ...search, [name]: value });
    }
  };
  return (
    <Container className="form ">
      <Row>
        <Col className="selectH1">
          <div className="title d-flex flex-row align-items-center">
            <img
              className="icon"
              src={require("../assets/ic_outline-auto-graph.png")}
              alt=""
            />
            <p
              className="searchPtag
"
            >
              篩選器
            </p>
          </div>
          <img
            className="icon2"
            src={require("../assets/ic_round-error-outline.png")}
            alt=""
          />
        </Col>
      </Row>
      <Row className="formcol">
        <Col md={4}>
          <Form className="theInputform">
            <Form.Group>
              <Form.Control
                type="text"
                list="options"
                placeholder="請輸入其中一個項目: 毛利率 銷售金額 銷售佔比 銷售數量"
                name="judgeTheme"
                onChange={normalChange}
                value={search.judgeTheme || ""}
              />

              <datalist id="options">
                {["銷售金額", "銷售數量", "銷售佔比", "毛利率"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </datalist>
            </Form.Group>
            <Form.Group className="d-flex flex-row regionType">
              <Form.Select
                type="select"
                aria-label="地區"
                style={{ marginRight: "1rem" }}
                name="region"
                onChange={normalChange}
                value={search.region || ""}
              >
                <option>地區</option>
                {theJson.map((item) => (
                  <option key={theJson.indexOf(item)} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
              <Form.Select
                type="select"
                aria-label="年分"
                name="sales_year"
                onChange={normalChange}
                value={search.sales_year || ""}
              >
                <option>年分(from 2018 to now)</option>
                {yearsArray.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="d-flex flex-row regionType">
              <Form.Label style={{ color: "white", marginRight: "1rem" }}>
                類別
              </Form.Label>
              {["A", "B", "C"].map((item) => (
                <Form.Group key={item} className="d-flex flex-row">
                  <label
                    style={{ color: "white", marginRight: "0.5rem" }}
                    className="form-check-label"
                    htmlFor={`radio${item}`}
                  >
                    {item}
                  </label>
                  <Form.Check
                    name="type"
                    type="radio"
                    id={`radio${item}`}
                    style={{ marginRight: "1rem" }}
                    value={item}
                    onChange={onRadioChange}
                    checked={checkvalue == item}
                  />
                </Form.Group>
              ))}
            </Form.Group>
          </Form>
        </Col>
        <Row>
          <Col md={8}></Col>

          <Col style={{ padding: "2rem" }}>
            <div className="btndiv">
              <Button
                variant="primary"
                type="submit"
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  grab();
                }}
              >
                提交
              </Button>
              <Button
                onClick={() => {
                  clear();
                }}
                variant="primary"
                type="submit"
              >
                清除
              </Button>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default SearchForm;
