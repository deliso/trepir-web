// import { Card, Typography } from '@mui/material';
// import Box from '@mui/material/Box';
import { Draggable, Droppable } from 'react-beautiful-dnd';
// import Activity from '../../Discover/Activity';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import Activity from '../../Discover/Activity';

function EditTripActivitiesContainer({ savedActivities }: any) {
	//	the ids are so that this list will always contain unique draggable ids. Activity id was not going to work
	const ids: any = [];
	//	eslint-disable-next-line
	for (let i = 0; i <= savedActivities.ActivitiesList.length; i++) {
		ids.push(String(Math.random()));
	}
	console.log(ids);
	return (
		<Droppable
			droppableId="favoritedActivities"
			key="favoritedActivities"
			// direction="horizontal"
		>
			{/* eslint-disable-next-line */}
			{(provided) => {
				return (
					// THIS DIV IS THE CONTAINER
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						style={{
							// backgroundColor: 'pink',
							// width: '50vw',
							display: 'flex',
							flexWrap: 'wrap',
							margin: '3vw 0 0 5vw',
							height: 0,
							gap: 10,
						}}
					>
						{/* eslint-disable-next-line */}
						{savedActivities.ActivitiesList.map((activity: any, index: any) => {
							return (
								<Draggable
									key={ids[index]}
									draggableId={ids[index]}
									index={index}
								>
									{/* eslint-disable-next-line */}
									{(provided) => {
										return (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												style={{
													// userSelect: 'none',
													// padding: 4,
													// height: '6rem',
													// minHeight: '6rem',
													// width: '4rem',
													// minWidth: '4rem',
													// backgroundColor: '#456C86',
													// color: 'white',
													// border: '1px solid black',
													...provided.draggableProps.style,
												}}
											>
												<Activity
													activity={activity}
													setSelectedActivity={() => console.log('placeholder')}
												/>
												{/* {activity.name} */}
											</div>
										);
									}}
								</Draggable>
							);
						})}
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
}

export default EditTripActivitiesContainer;
