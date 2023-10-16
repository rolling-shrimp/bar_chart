import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Chart } from "react-google-charts";
const Show = ({ datas }) => {
  return (
    <Container style={{ border: "white solid 2px " }} className="showing">
      <Row>
        <Col className="p-3 d-flex flex-column align-items-center justify-content-center">
          {datas.length != 0 && (
            <Chart
              chartType="BarChart"
              data={[
                ["Name", "Count"], // 列标签
                ...datas,
              ]}
              //   width="100%"
              //   height="400px"
              options={{
                width: "100%",
                height: "100%",
                //   backgroundColor: "black", // 设置背景为透明
                colors: ["orange", "yellow"],
              }}
              legendToggle
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Show;
