import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'
import './App.css'

import { useCallback, useMemo } from 'react'
import { events } from './events'
import { type DayCellMountArg, type DidMountHandler, type EventInput } from '@fullcalendar/core'

export function App() {
	const showMoreMap = useMemo(() => {
		const map = new Map<string, number>()
		for (const d of events) {
			map.set(
				moment(d.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
				(d.total_count || 0) - (d.events.length || 0)
			)
		}
		return map
	}, [])

	const calendarEvents = useMemo(() => {
		return events.flatMap((d) =>
			d.events.map(
				(ev): EventInput => ({
					id: ev.id.toString(),
					title: ev.title,
					start: ev.datetime_start,
					end: ev.datetime_end,
					color: ev.color,
					extendedProps: { committee_id: ev.committee_id }
				})
			)
		)
	}, [])

	const handleDayCellDidMount: DidMountHandler<DayCellMountArg> = useCallback(
		(arg) => {
			setTimeout(() => {
				const calendar = arg.view.calendar

				if (!arg.view.type.toLowerCase().includes('month')) return

				const key = moment(arg.date).format('YYYY-MM-DD')
				const showMore = showMoreMap.get(key)

				if (!showMore) return

				const nativeDayMoreLink = arg.el.querySelector<HTMLAnchorElement>(
					'.fc-daygrid-more-link:not(.fc-daygrid-more-custom-link)'
				)

				let totalHiddenEvents = showMore

				if (nativeDayMoreLink) {
					const text = nativeDayMoreLink.textContent.trim()
					const num = parseInt(text.replace(/[^\d]/g, ''), 10)
					if (num && !isNaN(num)) {
						totalHiddenEvents += num
					}
				}

				const customDayMoreLink = document.createElement('a')
				customDayMoreLink.setAttribute('tab-index', '0')
				customDayMoreLink.className =
					'fc-daygrid-more-link fc-daygrid-more-custom-link fc-more-link'

				customDayMoreLink.title = `Show ${totalHiddenEvents} more event${totalHiddenEvents === 1 ? '' : 's'}`
				customDayMoreLink.textContent = `+ ${totalHiddenEvents} more`

				customDayMoreLink.onclick = (e) => {
					e.preventDefault()
					calendar.changeView('timeGridDay', key)
					calendar.gotoDate(key)
				}

				const moreWrap =
					arg.el.querySelector('.fc-daygrid-day-bottom') ||
					(() => {
						const wrap = document.createElement('div')
						wrap.className = 'fc-daygrid-day-bottom'
						arg.el.appendChild(wrap)
						return wrap
					})()

				moreWrap.appendChild(customDayMoreLink)
			})
		},
		[showMoreMap]
	)

	return (
		<div className="fc-calendar-wrapper">
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
				initialView="dayGridMonth"
				height="100%"
				nowIndicator
				headerToolbar={{
					left: 'today,prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
				}}
				buttonText={{
					today: 'Today',
					month: 'Month',
					week: 'Week',
					day: 'Day',
					list: 'Agenda'
				}}
				allDayText=""
				events={calendarEvents}
				dayMaxEvents={2}
				eventDisplay="block"
				moreLinkClassNames="fc-daygrid-more-hidden-link"
				dayCellDidMount={handleDayCellDidMount}
			/>
		</div>
	)
}
