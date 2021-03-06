
import React, { Fragment } from 'react';
import Link from 'next/link';

const RefreshLink = () => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link as="/dfpmanager/refresh" href=""><a>DFPManager.refresh()</a></Link>
);

export default function () {
  return (
    <Fragment>
      <p>
        Use the property
        {' '}
        <strong>shouldRefresh</strong>
        {' '}
        to have grained
        control of what ad slots will refresh when calling&nbsp;
        <RefreshLink />
        .
      </p>
      <p>
        This property takes a function that returns a boolean as
        argument.
        {' '}
        <RefreshLink />
        {' '}
        will check what ads should be
        refreshed calling it:
      </p>
      <ol>
        <li>
          when it returns true: the ad is refreshed (default if you don&apos;t
          pass this prop).
        </li>
        <li> when false: the ad is not refreshed. </li>
      </ol>
    </Fragment>
  );
}
