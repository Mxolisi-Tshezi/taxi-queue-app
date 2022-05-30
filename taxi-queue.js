function TaxiQueue() {

	let peopleCounter = 0;
	let taxiCounter = 0

	function joinQueue() {
		peopleCounter++;


	}

	function leaveQueue() {
		if (peopleCounter > 0) { return peopleCounter--; }
	}

	function joinTaxiQueue() {
		taxiCounter++
	}

	function queueLength() {
		return peopleCounter

	}

	function taxiQueueLength() {
		return taxiCounter

	}

	function taxiDepart() {
		if (taxiCounter > 1 && peopleCounter >= 12) {
			taxiCounter--;
			peopleCounter -= 12;
		}

		// if (taxiCounter > 0 && peopleCounter > 12) {
		// 	taxiCounter--;
		// 	peopleCounter -= 12;
		// }

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}