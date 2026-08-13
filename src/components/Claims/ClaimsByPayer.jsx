import React, { useEffect, useRef, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

// Top level: claim volume by payer (managed care plan)
// Drilldown: each payer's own breakdown across the six claimStatusEnum values
//
// Payer-level colors are all warm neutrals (soil family) — payer identity
// isn't semantically meaningful. Status colors are the SAME six hex values
// reused identically across every payer's drilldown, so denial rate (red)
// or paid rate (green) can be compared visually payer-to-payer, not just
// within a single slice.
// Payer-level colors pulled directly from App.css :root — the same
// purple/pink/orange/black family used by the dashboard's summary cards,
// so this chart visually reads as part of the same app, not a different theme.
var payerColors = ['#242d49', '#BB67FF', '#FF919D', '#fca61f'] // black / purple / pink / orange

// Status-level colors match the MUI Chip convention already established in
// the Recent Encounters table (Draft=gray, Note generated=orange,
// Reviewed=blue, Billed=green) — extended to all six claimStatusEnum values.
// Same six colors, same order, reused identically across every payer's
// drilldown so denial rate is visually comparable payer-to-payer.
var statusColors = [
  '#788097', // Draft — gray, matches existing Draft chip
  '#A9AFBD', // Validated — lighter gray, still "not yet submitted"
  '#fca61f', // Submitted — orange, matches existing Note generated chip
  '#E08E00', // Resubmitted — deeper amber, same family as Submitted but distinct
  '#2E7D32', // Paid — green, matches existing Billed chip
  '#D32F2F', // Denied — red, new but intentionally alarming (no green counterpart existed)
]

const ClaimsByPayerChart = () => {
    const containerRef = useRef(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (!containerRef.current) return
        const observer = new ResizeObserver(([entry]) => {
            if (entry.contentRect.width > 0) setReady(true)
        })
        observer.observe(containerRef.current)
            return () => observer.disconnect()
    }, [])

  const [state] = React.useState({
    series: [
      {
        data: [
          { x: 'Health Net', y: 45, drilldown: 'health-net' },
          { x: 'Anthem Blue Cross', y: 38, drilldown: 'anthem' },
          { x: 'Molina Healthcare', y: 28, drilldown: 'molina' },
          { x: 'Central California Alliance', y: 13, drilldown: 'cca' },
        ],
      },
    ],
    options: {
        chart: {
        type: 'donut',
        height: 420,
        width: '100%',
        fontFamily: 'var(--body)',
        redrawOnParentResize: true,
        redrawOnWindowResize: true,
        },
      colors: payerColors,
      legend: {
        position: 'bottom',
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
          },
        },
      },
      title: {
        text: 'Claims by Payer',
        align: 'left',
      },
      subtitle: {
        text: 'Click a payer to see its status breakdown. Use the breadcrumb to go back.',
        align: 'left',
      },
      drilldown: {
        enabled: true,
        breadcrumb: {
          show: true,
          position: 'top-right',
          rootLabel: 'All Payers',
          separator: ' / ',
        },
        series: [
          {
            id: 'health-net',
            name: 'Health Net — by Status',
            colors: statusColors,
            data: [
              { x: 'Draft', y: 3 },
              { x: 'Validated', y: 5 },
              { x: 'Submitted', y: 12 },
              { x: 'Resubmitted', y: 2 },
              { x: 'Paid', y: 20 },
              { x: 'Denied', y: 3 },
            ],
          },
          {
            id: 'anthem',
            name: 'Anthem Blue Cross — by Status',
            colors: statusColors,
            data: [
              { x: 'Draft', y: 2 },
              { x: 'Validated', y: 4 },
              { x: 'Submitted', y: 10 },
              { x: 'Resubmitted', y: 1 },
              { x: 'Paid', y: 18 },
              { x: 'Denied', y: 3 },
            ],
          },
          {
            id: 'molina',
            name: 'Molina Healthcare — by Status',
            colors: statusColors,
            data: [
              { x: 'Draft', y: 2 },
              { x: 'Validated', y: 3 },
              { x: 'Submitted', y: 7 },
              { x: 'Resubmitted', y: 1 },
              { x: 'Paid', y: 12 },
              { x: 'Denied', y: 3 },
            ],
          },
          {
            id: 'cca',
            name: 'Central California Alliance — by Status',
            colors: statusColors,
            data: [
              { x: 'Draft', y: 1 },
              { x: 'Validated', y: 3 },
              { x: 'Submitted', y: 5 },
              { x: 'Resubmitted', y: 2 },
              { x: 'Paid', y: 2 },
              { x: 'Denied', y: 0 },
            ],
          },
        ],
      },
    },
  })

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width="100%"
          height={420}
        />
      </div>
    </div>
  )
}

export default ClaimsByPayerChart