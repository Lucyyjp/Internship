import React from 'react'
import { connect } from 'react-redux'
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { AxisBottom, AxisLeft } from '@vx/axis'

function mapStateToProps(state) {
  return{
    customers: state.customersObj.customers,
  };
}

class BirthdayGraph extends React.Component {
  render() {
    // Customer data
    const data = new Array(32);
    data[0] = {date: '', frequency: 0}
    for(let i=1;i<(data.length);i++){
      data[i] = {date: i, frequency: 0}
    };

      this.props.customers.map((customer) => {
      let day = customer[2].slice(0,2);
      data[Number(day)].frequency += 1;
    });

    // Graph dimensions and margins
    const width = 600;
    const height = 500;
    const margin = { top: 20, bottom: 20, left: 20, right: 20 };

    // Bounds
    const xMax = width - margin.left - margin.right-10;
    const yMax = height - margin.top - margin.bottom-10;

    /* ALTERRRR */
    const x = d => d.date;
    const y = d => d.frequency;

    // Scale graph by data
    const xScale = scaleBand({
      range: [0, xMax],
      domain: data.map(x),
      padding: 0.4,
    });
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, Math.max(...data.map(y))],
    });

    // Compose together the scale and accessor functions to get point functions
    const compose = (scale, accessor) => data => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    return (
      <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${i}`}>
          <Bar
          x={xPoint(d)}
          y={yMax - barHeight}
          height={barHeight}
          width={xScale.bandwidth()}
          fill='#3399ff'
          />
          </Group>
        );
      })}
      <AxisLeft
      top={margin.top-margin.bottom/2}
      left={margin.left}
      hideTicks={true}
      numTicks={Math.min(11,Math.max(...data.map(y)))}
      scale={yScale}
      label="Frequency"
      tickLabelProps={(value, index) => ({
        fontSize: 9,
        textAnchor: 'middle',
      })}
      />
      <AxisBottom
      top={yMax}
      left={margin.left-margin.right}
      hideTicks={false}
      scale={xScale}
      label="Day of the month"
      tickLabelProps={(value, index) => ({
        fontSize: 9,
        textAnchor: 'end',
      })}
      />
      </svg>
       )
     }
   }

export default connect(mapStateToProps)(BirthdayGraph)
