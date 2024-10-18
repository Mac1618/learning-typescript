// -----------------------------------------------------------------------------------------------
// LESSON 18: CLASS - INTERFACE with CLASS
// - you can implement types morethan the TakePhoto or Story interface have

interface TakePhoto {
	cameraMode: string
	filter: string
	burst: number
}

interface Story {
	createStory(): void
}

// Implements TakePhoto iterface
class Instagram implements TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {}
}

// Implements TakePhoto and Story interface
class Youtube implements TakePhoto, Story {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number,

		public extra: string	// not implemented from interface
	) {}

	createStory(): void {
		console.log('New story is created!')
	}
}