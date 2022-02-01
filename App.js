import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Controller from './src/controller/Controller';
import DataContext from 'model/context/context';
import deviceData from 'model/deviceData'

let devData = new deviceData

export default () => {
  const [data, setData] = useState(devData)

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
          <DataContext.Provider value={{ data, setData }}>
            <Controller />
          </DataContext.Provider>
      </ApplicationProvider>
    </>
  )
};