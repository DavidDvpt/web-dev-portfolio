import { Container, Row } from "reactstrap";
import CompetencesInfo from "./CompetencesInfo";
import CvFormations from "./CvFormations";
import EnTete from "./enTete";
import CvExperiencesPro from "./CvExperiencesPro";
import Profil from "./Profil";
import Langues from "./Langues";
import Interets from "./Interets";
import { Component } from "react";
import LeftColumn from "./LeftColumn";
import style from "./curriculum.module.scss";

class CurriculumContent extends Component {
    render() {
        return (
            <Container className={style.curriculumContent}>
                <EnTete />
                <Row className="mt-3">
                    <LeftColumn className="col-5">
                        <Profil className="p-0" />
                        <CompetencesInfo />
                        <CvFormations />
                        <Langues />
                        <Interets />
                    </LeftColumn>
                    <div className={`${style.rightColumn} col-7`}>
                        <CvExperiencesPro />
                    </div>
                </Row>
            </Container>
        );
    }
}

export default CurriculumContent;
