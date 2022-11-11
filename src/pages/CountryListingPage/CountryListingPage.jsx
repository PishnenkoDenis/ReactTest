import React, {
  memo, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CountryTable from '../../components/CountryTable/CountryTable';
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import Loader from '../../components/Loader/Loader';
import { getList } from '../../redux/actions/listingActions';
import {
  getError, getIsLoading, getListing,
} from '../../redux/selectors/selectors';

function CountryListingPage() {
  const dispatch = useDispatch();

  const listing = useSelector(getListing);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getList());
  }, []);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <ErrorAlert message={error} />
    );
  }

  return (
    <>
      <CountryTable listing={listing} />
      {/* <PopUp
        show={show}
        name={commonName}
        officialName={officialName}
      /> */}
    </>
  );
}

export default memo(CountryListingPage);
