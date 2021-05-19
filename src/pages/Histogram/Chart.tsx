import React, { useState, useContext, useRef, useEffect } from 'react';
import HistogramContext from './context';
import DraggableBar from './DraggableBar';
import { SVG_WIDTH, SVG_HEIGHT } from '@/constants/histogram';
import { getYAxisSizes } from '@/helper/histogram';

function Chart() {
  const [svgInfo, setSvgInfo] = useState({ svgPoint: null, screenCTM: null });
  const { state } = useContext(HistogramContext);
  const svgRef = useRef(null);

  useEffect(() => {
    const svgNode = svgRef.current;
    const svgPoint = svgNode.createSVGPoint();
    const screenCTM = svgNode.getScreenCTM().inverse();
    setSvgInfo({
      svgPoint,
      screenCTM,
    });
  }, [svgRef]);

  const maxYAxis = state.maxYAxis;
  const barTotal = state.bars.length;
  const yAxisSizes = getYAxisSizes(maxYAxis);

  return (
    <svg className="chart" ref={(e) => svgRef.current = e} viewBox={`0 0 ${SVG_WIDTH + 200} ${SVG_HEIGHT + 50}`}>
      <g transform={`translate(100, ${SVG_HEIGHT + 20})`}>
        <g className="axis">
          <line x1="0" y1="0" x2={SVG_WIDTH} y2="0"/>
          <line x1="0" y1="0" x2="0" y2={-SVG_HEIGHT} />
          <g>
            {yAxisSizes.map((item, index) => (
              <line key={index} x1="-20" y1={item} x2="0" y2={item}/>
            ))}
          </g>
          <g className="levelLines">
            {yAxisSizes.map((item, index) => {
              const value = index + 1;
              if (value % 5 !== 0) return '';
              return (<g key={index}>
                <text x="-55" y={item + 10}>{value}</text>
                <line x1="-20" y1={item} x2={SVG_WIDTH} y2={item}/>
              </g>)
            })}
          </g>
        </g>
        <g className="bars">
          {state.bars.map((item, index) => (
            <DraggableBar
              key={index}
              barData={item}
              index={index}
              barTotal={barTotal}
              svgInfo={svgInfo}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

export default Chart;
