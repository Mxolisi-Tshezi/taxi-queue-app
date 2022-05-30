function TaxiQueue() {

	let peopleCounter=0;
	let taxiCounter=0

	function joinQueue() {
		peopleCounter++;


	}

	function leaveQueue() {
if(peopleCounter>0){peopleCounter;}
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

	function taxiDepart(){
		if(taxiCounter>0 &&counter1>12){
			taxiCounter--;
			peopleCounter-=12;
		}

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