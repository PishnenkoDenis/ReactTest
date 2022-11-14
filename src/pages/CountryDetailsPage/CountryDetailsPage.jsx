import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsTable from '../../components/DetailsTable/DetailsTable';

import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import Loader from '../../components/Loader/Loader';
import { getDetailsData, getDetailsEscaped } from '../../redux/actions/detailsActions';
import {
  getErrorDetails,
  getIsLoadingDetails,
  getDetails,
} from '../../redux/selectors/selectors';

function CountryDetailsPage() {
  const dispatch = useDispatch();
  const { alphaCode } = useParams();

  const details = useSelector(getDetails);
  const error = useSelector(getErrorDetails);
  const isLoading = useSelector(getIsLoadingDetails);

  useEffect(() => {
    dispatch(getDetailsData(alphaCode));
    return () => {
      dispatch(getDetailsEscaped());
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorAlert message={error} />;
  }

  return <DetailsTable details={details} />;
}

export default memo(CountryDetailsPage);
