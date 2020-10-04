import { IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react';
import React from 'react';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

import IonCardEqualHeight from '../misc/IonCardEqualHeight';

export interface IMetric {
  name: string;
  value: number;
  fill: string;
}

interface IClusterMetricProps {
  title: string;
  data?: IMetric[];
  unit: string;
}

const ClusterMetric: React.FunctionComponent<IClusterMetricProps> = ({ title, data, unit }: IClusterMetricProps) => {
  return (
    <IonCardEqualHeight>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div style={{ height: '250px', width: '100%' }}>
          <ResponsiveContainer>
            <RadialBarChart innerRadius="25%" barSize={5} data={data} startAngle={90} endAngle={-270}>
              <RadialBar minAngle={15} background={true} dataKey="value" />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        {data && data.length > 0
          ? data.map((metric, index) => (
              <IonRow key={index}>
                <IonCol size="auto">
                  <span style={{ backgroundColor: metric.fill }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </IonCol>
                <IonCol size="auto">
                  <b>{metric.name}:</b>
                </IonCol>
                <IonCol>
                  {metric.value}
                  {unit}
                </IonCol>
              </IonRow>
            ))
          : null}
      </IonCardContent>
    </IonCardEqualHeight>
  );
};

export default ClusterMetric;
