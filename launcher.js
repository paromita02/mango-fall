class Launcher{
	constructor(body,anchor){
		
		var options={
             bodyA:body,			 
			pointB:anchor, 
			stiffness:0.007, 
			length:1
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.laun=Constraint.create(options)
		World.add(world,this.laun)
	}

	attach(body){
		this.laun.bodyA=body;
	}

	fly(){
		this.laun.bodyA=null;
	}

	display(){
		if(this.laun.bodyA){
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}