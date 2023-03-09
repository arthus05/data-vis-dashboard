import { Group } from '@visx/group'
import { Bar } from '@visx/shape'
import { scaleLinear, scaleBand } from '@visx/scale'

import { letterFrequency } from '@visx/mock-data'
import { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency'
import { AxisBottom, AxisLeft } from '@visx/axis'
import { useMemo } from 'react'
import { ALGUMA_COISA } from '@/mock/histogram/cuida'

const data = ALGUMA_COISA
const defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 }

// accessors
const getIncome = (d: { income: number, num: number }) => d.income;
const getIncomeFrequency = (d: { income: number, num: number }) => Number(d.num) * 100;

export interface IBarsProps {
  width: number;
  height: number;
  events?: boolean;
}

const BarGraph = ({ width, height, events = false }: IBarsProps) => {
  console.log('data', data);

  // bounds
  const xMax = width - defaultMargin.right - defaultMargin.left;
  const yMax = height - defaultMargin.top - defaultMargin.bottom;

  const xScale = useMemo(() => scaleBand<number>({
    range: [0, xMax],
    round: true,
    domain: data.map(getIncome),
    padding: 0.4
  }), [xMax])
  console.log('domain', xScale.domain());

  const yScale = useMemo(() => scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(getIncomeFrequency))],
  }), [yMax])

  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
      {
        width < 10 ? null : (
          <svg width={width} height={height}>
            <rect x={0} y={0} width={width} height={height} fill="url(#teal)" rx={14} />
            <Group top={defaultMargin.top} left={defaultMargin.left}>
              {data.map((d) => {
                const letter = getIncome(d);
                const barWidth = xScale.bandwidth();
                const barHeight = yMax - (yScale(getIncomeFrequency(d)) ?? 0);
                const barX = xScale(letter);
                const barY = yMax - barHeight;
                return (
                  <Bar
                    key={`bar-${letter}`}
                    x={barX}
                    y={barY}
                    width={barWidth}
                    height={barHeight}
                    fill="rgba(23, 233, 217, .5)"
                    onClick={() => {
                      if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);
                    }}
                  />
                );
              })}
            </Group>
            <AxisLeft scale={yScale} left={20} top={defaultMargin.top}/>
            <AxisBottom top={yMax + defaultMargin.top} scale={xScale} numTicks={xScale.domain().length}/>
          </svg>
        )
      }
    </div>
  )
}

export default BarGraph