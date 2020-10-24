import styled from "styled-components"

const Column= styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  min-width: 0;
`;

const ColumnWCentered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  min-width: 0;
`;

const ColumnHWCentered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  min-height: 100%;
`;

const Row = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  justify-content: flex-start;
  min-width: 0;
`;

const RowHCentered= styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  justify-content: center;
  min-width: 0;
`;

export { Column, ColumnWCentered, Row, RowHCentered, ColumnHWCentered };