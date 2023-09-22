import React from 'react';
import { useGlobalContext } from '../../services/context/globalContext';
import { UserType } from '../../types/login';
import CaseWorkerBeneficiaries from '../case-worker-beneficiaries';
import NavigatorBeneficiaries from '../navigator-beneficiaries';

export default function Beneficiaries() {
  const {userDetails} = useGlobalContext();

  return userDetails?.userType === UserType.CASE_WORKER ? <CaseWorkerBeneficiaries/>: <NavigatorBeneficiaries/>
}