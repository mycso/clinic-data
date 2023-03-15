import Clinics1 from '../tech-test-data/clinics.csv'
import Patients1 from '../tech-test-data/patients-1.csv'
import Patients2 from '../tech-test-data/patients-2.csv'
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Patient1 from './Patient1';
import Patient2 from './Patient2';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  margin: 0px 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

function Home() {
    const [clinicData, setClinicData] = useState([]);
    const [patients1Data, setPatients1Data] = useState([]);
    const [patients2Data, setPatients2Data] = useState([]);

    useEffect(() => {
        Papa.parse(Clinics1, {
            download: true,
            header: true,
            dynamicTyping: true,
            delimiter: "",
            complete: ((result) => {
                console.log(result)
                setClinicData(result);
            })
        })
        Papa.parse(Patients1, {
            download: true,
            header: true,
            dynamicTyping: true,
            delimiter: "",
            complete: ((result) => {
                console.log(result)
                setPatients1Data(result);
            })
        })
        Papa.parse(Patients2, {
            download: true,
            header: true,
            dynamicTyping: true,
            delimiter: "",
            complete: ((result) => {
                console.log(result)
                setPatients2Data(result);
            })
        })
    }, []);

    const [active, setActive] = useState("tab1")

    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActive("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActive("tab2");
    };

    return (
        <>
        <article className="article-header">
            <header>
                <h1>Clinics</h1>
                <br />
                <ButtonGroup>
                    {clinicData.data?.map(clinic => (
                        <div key={clinic.id}>
                            {clinic.id === null ? 
                                null : 
                                <Tab
                                    key={clinic}
                                    onClick={clinic.name === "Salve Fertility" ? handleTab1 : handleTab2}
                                >
                                    {clinic.name}
                                </Tab>
                            }
                        </div>
                    ))}
                </ButtonGroup>
            </header>
        </article>
        {active === "tab1" ? 
            <div className="wrapper">
                <h4> Your payment selection: Salve Fertility</h4>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                    </tr>
                    <Patient1 patients1Data={patients1Data} />
                </table>
            </div> 
            :
            <div className="wrapper">
                <h4> Your payment selection: London IVF </h4>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                    </tr>
                    <Patient2 patients2Data={patients2Data} />
                </table>
            </div>
        }

        
        </>
    );
}

export default Home;
