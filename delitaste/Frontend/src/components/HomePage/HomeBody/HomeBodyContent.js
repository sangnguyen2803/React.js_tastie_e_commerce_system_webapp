import "./HomeBody.scss";
import { Fragment, useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";

import {
  getProviderGroup,
  getAllProvider,
} from "store/actions/HomeAction/HomeAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProviderGroup from "components/HomePage/HomeBody/ProviderGroup";
import ProviderShowAll from "components/HomePage/HomeBody/ProviderShowAll";
import Button from "components/Commons/Button/Button";
import ButtonGroup from "components/Commons/Button/ButtonGroup/ButtonGroup";

const providerGroup = [
  {
    group_title: "In a rush?",
    group_description: "Here’s the fastest delivery for you",
  },
  {
    group_title: "Orders near you",
    group_description: "Your neighborhood’s latest orders",
  },
  {
    group_title: "Today's offers",
    group_description: "",
  },
  {
    group_title: "Popular near you",
    group_description: "",
  },
  {
    group_title: "Double the Savings",
    group_description: "",
  },
];
const glimit = 20;
const goffset = 1;
const long = 106.68250448518744;
const lat = 10.763019107348029;
function HomeBodyContent(props) {
  const { getProviderGroup, getAllProvider } = props;
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [group3, setGroup3] = useState([]);
  const [group4, setGroup4] = useState([]);
  const [curLimit, setCurLimit] = useState(30);
  const [curOffset, setCurOffset] = useState(1);
  const [allProvider, setAllProvider] = useState([]);
  useEffect(() => {
    async function fetchingDataAPI() {
      const result1 = await getProviderGroup(1, glimit, goffset, lat, long);
      const result2 = await getProviderGroup(5, glimit, goffset, lat, long);
      const result3 = await getProviderGroup(6, glimit, goffset, lat, long);
      const result4 = await getProviderGroup(7, glimit, goffset, lat, long);
      const all = await getAllProvider(curLimit, curOffset, lat, long);
      Promise.all([result1, result2, result3, result4, all]).then((values) => {
        setGroup1(values[0]);
        setGroup2(values[1]);
        setGroup3(values[2]);
        setGroup4(values[3]);
        setAllProvider(values[4]);
      });
    }
    fetchingDataAPI();
  }, []);

  const fetchMoreProvider = async () => {
    const result = await getAllProvider(curLimit, curOffset, lat, long);
    const newList = allProvider.concat(result);
    setAllProvider(newList);
  };
  return (
    <Fragment>
      <div className="home-content-provider">
        {props.currentSortMode == 1 && (
          <Fragment>
            <ProviderGroup
              groupTitle={providerGroup[0].group_title}
              groupDescription={providerGroup[0].group_description}
              providerList={group1}
            />
            <ProviderGroup
              groupTitle={providerGroup[1].group_title}
              groupDescription={providerGroup[1].group_description}
              providerList={group2}
            />
            <ProviderGroup
              groupTitle={providerGroup[2].group_title}
              groupDescription={providerGroup[2].group_description}
              providerList={group3}
            />
            <ProviderGroup
              groupTitle={providerGroup[3].group_title}
              groupDescription={providerGroup[3].group_description}
              providerList={group4}
            />
          </Fragment>
        )}
        <Fragment>
          <ProviderShowAll providerList={allProvider} />
          <ButtonGroup float="center" mgTop={10} mgBottom={30}>
            <Button
              onClick={() => {
                setCurOffset((prev) => prev + 1);
                fetchMoreProvider();
              }}
              color={"white"}
              bgColor={"black"}
              justifyContent={"center"}
              gap={"10px"}
              width={130}
              fontSize={14}
              height={40}
              label={"Show More"}
            />
          </ButtonGroup>
        </Fragment>
      </div>
    </Fragment>
  );
}

HomeBodyContent.propTypes = {
  user: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  getProviderGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.UserReducer,
  product: state.ProductReducer,
});

export default withRouter(
  connect(mapStateToProps, { getProviderGroup, getAllProvider })(
    HomeBodyContent
  )
);
