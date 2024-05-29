import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {useShiftContext} from '../context/ShiftContext';
import {AreaFilter, Rootview, ShiftList} from '../components';
import {CityObject} from '../types/commonTypes';

interface AvailableShiftsType {}

const AvailableShifts: React.FC<AvailableShiftsType> = ({}) => {
  const [shiftList, setshiftList] = useState<any>([]);
  const [areaList, setareaList] = useState<CityObject[]>([]);
  const [activeArea, setactiveArea] = useState('');

  const {availableData, getAvailableShiftsForCity} = useShiftContext();
  useEffect(() => {
    //Initialize shifts and area data once application loads after initial API call
    if (availableData?.areas && availableData?.availableShiftsList) {
      const newActive = activeArea || availableData?.areas[0]?.city;
      setareaList(availableData?.areas);
      setactiveArea(newActive);
      if (availableData?.availableShiftsList?.length) {
        setshiftList(getAvailableShiftsForCity(newActive));
      }
    }
  }, [availableData]);

  useEffect(() => {
    //Fetch new shifts whenever city changes
    if (activeArea) {
      setshiftList(getAvailableShiftsForCity(activeArea));
    }
  }, [activeArea]);

  return (
    <Rootview>
      {areaList?.length > 0 && (
        <AreaFilter
          areaList={areaList}
          handleChange={(city: string) => setactiveArea(city)}
          active={activeArea}
        />
      )}
      {shiftList?.length > 0 && (
        <ShiftList shiftData={shiftList} showLabel={true} />
      )}
    </Rootview>
  );
};

export default AvailableShifts;
