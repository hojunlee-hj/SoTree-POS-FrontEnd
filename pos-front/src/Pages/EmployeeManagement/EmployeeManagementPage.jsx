import Header from "../../Components/Header";
import {Link, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import EmployeeManagementTable from "../../Components/Table/EmployeeManagementTable";
import React, {useState} from "react";
import EmployeeAddPage from "./EmployeeAddPage";
import EmployeeActivitiesListPage from "./EmployeeActivitiesListPage";
import {Modal} from "../../Components/Modal";

const Div = styled.div`
  max-width: 1980px;
  padding: 20px;
  flex-wrap: nowrap;
  display: flex;
  gap: 1em;
  height: 680px;
`;

const LeftDiv = styled.div`
  width: 200%;
  height: 100%;
  flex-grow: 1;
  overflow: scroll;
`;

const RightDiv = styled.div`
  width: 70%;
  margin-top: 3%;
  margin-bottom: 3%;
  align-items: center;
`;

const InnerRightDiv = styled.div`
  vertical-align: middle;
  text-align: center;
  margin-top: 0;
  align-items: center;
`;

const Button = styled.button`
  top: 50%;
  width: 20rem;
  height: 4rem;
  background: #EBE7E7;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const Button2 = styled.button`
  top: 50%;
  width: 20rem;
  height: 4rem;
  background: #EBE7E7;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  font-size: 1.3rem;
  margin-bottom: 3rem;
`;


// input data format
const CreateRowData = (choice, number, name, id, pw, latestData, pos) => {
    return ({choice, number, name, id, pw, latestData, pos });
}

//---------------------- input rows information(back-end)---------------------
const cells = [
    CreateRowData('blink', '1', '이호준',
        'hello', '1234', '2021-11-03 13:00', '사장'),
    CreateRowData('blink', '2', '최지환',
        'world', '2345', '2021-11-03 13:00', '직원'),
]

const EmployeeManagementPage = () => {

    const [commute, setCommute] = useState(false);
    const [addEmployee, setAddEmployee] = useState(false);
    const [changeEmployee, setChangeEmployee] = useState(false);
    const [deleteEmployee, setDeleteEmployee] = useState(false);

    const onClickEmployeeCommute = () => {
        setCommute(!commute);
    }
    const onClickEmployeeAdd = () => {
        setAddEmployee(!addEmployee);
    }
    const onClickEmployeeChange = () => {
        setChangeEmployee(!changeEmployee);
    }
    const onClickEmployeeDelete = () => {
        setDeleteEmployee(!deleteEmployee);
    }

    const columnName = ['선택', '번호', '이름', 'ID', '비밀번호', '최근 출근일자', '직급']

    return (
        <>
            <Modal visible={commute} >
                <EmployeeAddPage/>
            </Modal>
            <Modal visible={addEmployee}>
                <EmployeeAddPage/>
            </Modal>
            <Modal visible={changeEmployee}>
                <EmployeeAddPage/>
            </Modal>
            <Modal visible={deleteEmployee}>
                <EmployeeAddPage/>
            </Modal>
            <Header text={"직원 관리"} restaurantName={"혜민이네 돈까스"}/>
            <Div>
                <LeftDiv>
                    <EmployeeManagementTable columnName={columnName} cells={cells} isCheckBox={true}/>
                </LeftDiv>
                <RightDiv>
                    <InnerRightDiv>
                        <Link to="/employeeManagement/workSchedule"><Button>근무표</Button></Link>
                        <Button2 onClick={onClickEmployeeCommute}>직원 출퇴근</Button2>
                        <Link to="/employeeManagement/employeeActivity"><Button>직원활동내역</Button></Link>
                        <Link to="/employeeManagement/employeeApproval"><Button2>직원승인</Button2></Link>
                        <Button onClick={onClickEmployeeAdd}>직원추가</Button>
                        <Button onClick={onClickEmployeeChange}>직원수정</Button>
                        <Button onClick={onClickEmployeeDelete}>직원삭제</Button>
                    </InnerRightDiv>
                </RightDiv>
                <Routes>
                    <Route path="/employeeManagement/workSchedule" element={<EmployeeAddPage/>} />
                    <Route path="/employeeManagement/employeeActivity" element={<EmployeeActivitiesListPage/>} />
                    <Route path="/employeeManagement/employeeApproval" element={<EmployeeAddPage/>} />
                </Routes>
            </Div>
        </>
    );
};

export default EmployeeManagementPage;