type RawEvent = {
	date: string
	events: {
		id: number | string
		color?: string
		title: string
		datetime_start: string
		datetime_end?: string
		committee_id: number
	}[]
	total_count: number
}

export const events: RawEvent[] = [
	{
		date: '30/10/2025',
		events: [
			{
				id: 2001,
				color: '#FF7043',
				title: 'Pre-November Setup (spans Oct30 - Nov02)',
				datetime_start: '2025-10-30T09:00:00',
				datetime_end: '2025-11-02T18:00:00',
				committee_id: 800
			},
			{
				id: 2002,
				color: '#F57C00',
				title: 'Oct30 — Overnight Prep (cross-midnight)',
				datetime_start: '2025-10-30T22:00:00',
				datetime_end: '2025-10-31T02:00:00',
				committee_id: 801
			}
		],
		total_count: 6
	},

	{
		// November
		date: '01/11/2025',
		events: [
			{
				id: 1001,
				color: '#FF5722',
				title: 'Project Kickoff Meeting',
				datetime_start: '2025-11-01T03:00:00',
				datetime_end: '2025-11-01T05:00:00',
				committee_id: 101
			},
			{
				id: 1002,
				color: '#2196F3',
				title: 'Team Building Workshop (multi-day)',
				datetime_start: '2025-11-01T08:00:00',
				datetime_end: '2025-11-04T08:30:00',
				committee_id: 102
			}
		],
		total_count: 10
	},

	{
		date: '03/11/2025',
		events: [
			{
				id: 1007,
				color: '#3F51B5',
				title: 'Sprint Planning',
				datetime_start: '2025-11-03T09:00:00',
				datetime_end: '2025-11-03T11:30:00',
				committee_id: 201
			},
			{
				id: 1008,
				color: '#009688',
				title: 'Architecture Review (multi-day Nov3-5)',
				datetime_start: '2025-11-03T14:00:00',
				datetime_end: '2025-11-05T14:00:00',
				committee_id: 202
			}
		],
		total_count: 10
	},

	{
		date: '04/11/2025',
		events: [
			{
				id: 4001,
				color: '#8E24AA',
				title: 'Late Deploy — Cross Midnight',
				datetime_start: '2025-11-04T23:30:00',
				datetime_end: '2025-11-05T01:30:00',
				committee_id: 1001
			},
			{
				id: 4103,
				color: '#E1BEE7',
				title: 'Interview Batch (slot A)',
				datetime_start: '2025-11-04T10:00:00',
				datetime_end: '2025-11-04T11:00:00',
				committee_id: 1603
			}
		],
		total_count: 10
	},

	{
		date: '05/11/2025',
		events: [
			{
				id: 1011,
				color: '#E91E63',
				title: 'Product Demo',
				datetime_start: '2025-11-05T02:00:00',
				datetime_end: '2025-11-05T03:30:00',
				committee_id: 301
			},
			{
				id: 1012,
				color: '#673AB7',
				title: 'Marketing Strategy',
				datetime_start: '2025-11-05T05:00:00',
				datetime_end: '2025-11-05T07:00:00',
				committee_id: 302
			}
		],
		total_count: 3
	},

	{
		date: '07/11/2025',
		events: [
			{
				id: 1015,
				color: '#FF9800',
				title: 'Conference Planning (multi-day Nov7-11)',
				datetime_start: '2025-11-07T09:00:00',
				datetime_end: '2025-11-11T17:00:00',
				committee_id: 401
			},
			{
				id: 1016,
				color: '#4CAF50',
				title: 'Team Lunch',
				datetime_start: '2025-11-07T12:00:00',
				datetime_end: '2025-11-07T13:00:00',
				committee_id: 402
			}
		],
		total_count: 8
	},

	{
		date: '08/11/2025',
		events: [
			{
				id: 10001,
				color: '#455A64',
				title: 'Open-ended Workshop (no end)',
				datetime_start: '2025-11-08T09:00:00',
				committee_id: 1701
			},
			{
				id: 10002,
				color: '#1E88E5',
				title: 'Short Multi-day (Nov8-9)',
				datetime_start: '2025-11-08T14:00:00',
				datetime_end: '2025-11-09T16:00:00',
				committee_id: 1702
			}
		],
		total_count: 2
	},

	{
		date: '10/11/2025',
		events: [
			{
				id: 6001,
				color: '#FFB300',
				title: 'Extended Training Program (Nov10 - Nov20)',
				datetime_start: '2025-11-10T09:00:00',
				datetime_end: '2025-11-20T17:00:00',
				committee_id: 1201
			},
			{
				id: 6002,
				color: '#FFA000',
				title: 'Training Setup Session',
				datetime_start: '2025-11-10T08:00:00',
				datetime_end: '2025-11-10T09:00:00',
				committee_id: 1202
			}
		],
		total_count: 5
	},

	{
		date: '11/11/2025',
		events: [
			{
				id: 8101,
				color: '#00695C',
				title: 'Cross-team Sync (Nov9 - Nov12)',
				datetime_start: '2025-11-09T08:30:00',
				datetime_end: '2025-11-12T17:30:00',
				committee_id: 2001
			},
			{
				id: 8102,
				color: '#00796B',
				title: 'Half-day Workshop',
				datetime_start: '2025-11-11T13:00:00',
				datetime_end: '2025-11-11T17:00:00',
				committee_id: 2002
			}
		],
		total_count: 9
	},

	{
		date: '12/11/2025',
		events: [
			{
				id: 5001,
				color: '#33691E',
				title: 'Full-day Maintenance (24h)',
				datetime_start: '2025-11-12T00:00:00',
				datetime_end: '2025-11-13T00:00:00',
				committee_id: 1101
			},
			{
				id: 5002,
				color: '#2E7D32',
				title: 'Maintenance Prep',
				datetime_start: '2025-11-11T16:00:00',
				datetime_end: '2025-11-11T18:00:00',
				committee_id: 1102
			}
		],
		total_count: 2
	},

	{
		date: '14/11/2025',
		events: [
			{
				id: 7701,
				color: '#D84315',
				title: 'Long Program (started Nov05)',
				datetime_start: '2025-11-05T09:00:00',
				datetime_end: '2025-11-25T17:00:00',
				committee_id: 1901
			},
			{
				id: 7702,
				color: '#BF360C',
				title: 'Special Review',
				datetime_start: '2025-11-14T11:00:00',
				datetime_end: '2025-11-14T12:00:00',
				committee_id: 1902
			}
		],
		total_count: 7
	},

	{
		date: '15/11/2025',
		events: [
			{
				id: 1020,
				color: '#795548',
				title: 'Quarterly Review (Nov15 - Nov18)',
				datetime_start: '2025-11-15T03:00:00',
				datetime_end: '2025-11-18T03:00:00',
				committee_id: 501
			},
			{
				id: 1021,
				color: '#607D8B',
				title: 'All Hands Meeting',
				datetime_start: '2025-11-15T08:00:00',
				datetime_end: '2025-11-15T09:30:00',
				committee_id: 502
			}
		],
		total_count: 18
	},

	{
		date: '18/11/2025',
		events: [
			{
				id: 7001,
				color: '#009688',
				title: 'Ad-hoc Session (no end provided)',
				datetime_start: '2025-11-18T14:30:00',
				committee_id: 1301
			},
			{
				id: 7002,
				color: '#00796B',
				title: 'Follow-up (30m)',
				datetime_start: '2025-11-18T16:00:00',
				datetime_end: '2025-11-18T16:30:00',
				committee_id: 1302
			}
		],
		total_count: 2
	},

	{
		date: '20/11/2025',
		events: [
			{
				id: 1023,
				color: '#3F51B5',
				title: 'Holiday Party Planning',
				datetime_start: '2025-11-20T03:00:00',
				datetime_end: '2025-11-20T04:30:00',
				committee_id: 601
			},
			{
				id: 1024,
				color: '#5C6BC0',
				title: 'Venue Visit',
				datetime_start: '2025-11-20T14:00:00',
				datetime_end: '2025-11-20T15:00:00',
				committee_id: 602
			}
		],
		total_count: 2
	},

	{
		date: '21/11/2025',
		events: [
			{
				id: 9201,
				color: '#C2185B',
				title: 'Interview A',
				datetime_start: '2025-11-21T10:00:00',
				datetime_end: '2025-11-21T10:30:00',
				committee_id: 2101
			},
			{
				id: 9202,
				color: '#AD1457',
				title: 'Interview B',
				datetime_start: '2025-11-21T10:15:00',
				datetime_end: '2025-11-21T11:00:00',
				committee_id: 2102
			}
		],
		total_count: 2
	},

	{
		date: '25/11/2025',
		events: [
			{
				id: 1024,
				color: '#FF9800',
				title: 'Thanksgiving Prep',
				datetime_start: '2025-11-25T03:00:00',
				datetime_end: '2025-11-28T03:30:00',
				committee_id: 701
			},
			{
				id: 1025,
				color: '#4CAF50',
				title: 'Volunteer Event',
				datetime_start: '2025-11-25T08:00:00',
				datetime_end: '2025-11-25T11:00:00',
				committee_id: 702
			}
		],
		total_count: 15
	},

	{
		date: '26/11/2025',
		events: [
			{
				id: 9901,
				color: '#0D47A1',
				title: 'Multi-month Program (Nov - Feb)',
				datetime_start: '2025-11-26T09:00:00',
				datetime_end: '2026-02-20T17:00:00',
				committee_id: 3001
			},
			{
				id: 9902,
				color: '#1565C0',
				title: 'Short Checkpoint',
				datetime_start: '2025-11-26T14:00:00',
				datetime_end: '2025-11-26T15:30:00',
				committee_id: 3002
			}
		],
		total_count: 6
	},

	{
		date: '28/11/2025',
		events: [
			{
				id: 9001,
				color: '#1976D2',
				title: 'Project Sprint (Nov28 - Dec03)',
				datetime_start: '2025-11-28T09:00:00',
				datetime_end: '2025-12-03T18:00:00',
				committee_id: 1501
			},
			{
				id: 9002,
				color: '#1565C0',
				title: 'Sprint Planning Kickoff',
				datetime_start: '2025-11-28T10:00:00',
				datetime_end: '2025-11-28T11:00:00',
				committee_id: 1502
			}
		],
		total_count: 4
	},

	{
		date: '30/11/2025',
		events: [
			{
				id: 9501,
				color: '#8E24AA',
				title: 'Month-end Wrapup',
				datetime_start: '2025-11-30T15:00:00',
				datetime_end: '2025-11-30T17:00:00',
				committee_id: 1601
			},
			{
				id: 9502,
				color: '#6A1B9A',
				title: 'Closeout Meeting',
				datetime_start: '2025-11-30T09:00:00',
				datetime_end: '2025-11-30T10:00:00',
				committee_id: 1602
			}
		],
		total_count: 5
	},

	// December
	{
		date: '01/12/2025',
		events: [
			{
				id: 100001,
				color: '#039BE5',
				title: 'Dec Kickoff',
				datetime_start: '2025-12-01T10:00:00',
				datetime_end: '2025-12-01T11:30:00',
				committee_id: 1701
			},
			{
				id: 100002,
				color: '#0288D1',
				title: 'Reporting Prep',
				datetime_start: '2025-12-01T14:00:00',
				datetime_end: '2025-12-01T15:00:00',
				committee_id: 1702
			}
		],
		total_count: 2
	}
]
