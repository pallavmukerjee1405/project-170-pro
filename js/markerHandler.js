AFRAME.registerComponent("markerhandler",{
    init:function(){
        this.el.addEventListener("markerFound",() =>{
            console.log("Marker is found!");
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is lost!");
            this.handleMarkerLost();
        });
    },

    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="flex";

        var ordersumButton=document.getElementById("order-summary-button");
        var orderButton=document.getElementById("order-button");

        ordersumButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Work in Progress..."
            });
        });

        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.pinimg.com/originals/d2/46/ce/d246cec00c17d677d3a3b8d195f6ac9f.jpg",
                title:"Thanks for Order!",
                text:"Your order will be served soon at your table..."
            });
        });

    },

    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="none";
    }
});