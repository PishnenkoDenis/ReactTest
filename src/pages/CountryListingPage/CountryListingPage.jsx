import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getList } from '../../redux/actions/listingActions';

function CountryListingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);
  return (
    <p>list</p>
  );
}

export default memo(CountryListingPage);
