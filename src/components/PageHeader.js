import { useMutation, useQuery } from "@apollo/react-hooks";
import { Col, Modal, Row } from "antd";
import React from "react";
import styled from "styled-components";
import {
  CREATE_DASHBOARD_ITEM,
  DELETE_DASHBOARD_ITEM,
} from "../graphql/mutations";
import { GET_DASHBOARD_ITEMS } from "../graphql/queries";
import { dataForDefault } from "../data";

const StyledRow = styled(Row)`
  padding: 23px 28px 13px 28px;
  background: white;
`;

const ButtonsCol = styled(Col)`
  text-align: right;
  display: flex;
  width: fit-content;
`;

const PageHeader = ({ title, button, restButton, noBorder }) => {
  const { data: currentData } = useQuery(GET_DASHBOARD_ITEMS);
  const data = dataForDefault; // Replace with actual data source

  const [removeDashboardItem] = useMutation(DELETE_DASHBOARD_ITEM, {
    refetchQueries: [
      {
        query: GET_DASHBOARD_ITEMS,
      },
    ],
  });
  const [addDashboardItem] = useMutation(CREATE_DASHBOARD_ITEM, {
    refetchQueries: [
      {
        query: GET_DASHBOARD_ITEMS,
      },
    ],
  });
  const handleResetCharts = async () => {
    Modal.confirm({
      title: "Are you sure you want to reset charts?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        if (!data || data.dashboardItems.length === 0) {
          return;
        }

        currentData.dashboardItems.map((item) => {
          removeDashboardItem({
            variables: {
              id: item && item.id, // Replace optional chaining with a null-check
            },
          });
        });
        try {
          for (let i = 0; i < data.dashboardItems.length; i++) {
            const item = data.dashboardItems[i];

            await addDashboardItem({
              variables: {
                id: item.id,
                input: {
                  vizState: JSON.stringify(item.vizState),
                  name: item.name,
                },
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      },
    });
  };

  return (
    <StyledRow>
      <Col span={12}>{title}</Col>
      <ButtonsCol span={12} onClick={handleResetCharts}>
        {restButton}
      </ButtonsCol>
      {/* <ButtonsCol span={2}>{button}</ButtonsCol> */}
    </StyledRow>
  );
};

export default PageHeader;
