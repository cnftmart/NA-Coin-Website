import $ from "jquery";

const drawPieChart = (selector, data, options) => {
    const $wrapper = $(selector);
    const W = $wrapper.width();
    const H = $wrapper.height();

    $(function(){
        $wrapper.drawPieChart(data, options);
    });
    
    $.fn.drawPieChart = function(data, options) {
        const $this = this;
        const W = $this.width();
        const H = $this.height();
        const centerX = W / 2;
        const centerY = H / 2;
        const cos = Math.cos;
        const sin = Math.sin;
        const PI = Math.PI;

        const settings = $.extend({
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 1,
            baseColor: "#fff",
            baseOffset: 15,
            edgeOffset: 30,
            pieSegmentGroupClass: "pieSegmentGroup",
            pieSegmentClass: "pieSegment",
            lightPiesOffset: 12,
            lightPiesOpacity: .3,
            lightPieClass: "lightPie",
            animation: true,
            animationSteps: 90,
            animationEasing: "easeInOutExpo",
            tipOffsetX: -15,
            tipOffsetY: -45,
            tipClass: "pieTip",
            beforeDraw: function(){},
            afterDrawed: function(){},
            onPieMouseenter: function(e, data){},
            onPieMouseleave: function(e, data){},
            onPieClick: function(e, data){}
        }, options);

        const animationOptions = {
            linear: function(t) {
                return t;
            },
            easeInOutExpo: function(t) {
                const v = t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
                return v > 1 ? 1 : v;
            }
        };

        const requestAnimFrame = function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        }();

        const $groups = [];
        const $pies = [];
        const $lightPies = [];
        const easingFunction = animationOptions[settings.animationEasing];
        const pieRadius = Math.min(H / 2, W / 2) - settings.edgeOffset;
        let segmentTotal = 0;

        // Draw base circle
        const drawBasePie = function() {
            const base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            const $base = $(base).appendTo($this);
            base.setAttribute("cx", centerX);
            base.setAttribute("cy", centerY);
            base.setAttribute("r", pieRadius + settings.baseOffset);
            base.setAttribute("fill", settings.baseColor);
        }();

        // Set up pie segments wrapper
        const pathGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const $pathGroup = $(pathGroup).appendTo($this);
        $pathGroup[0].setAttribute("opacity", 0);

        // Set up tooltip
        const $tip = $('<div class="' + settings.tipClass + '" />').appendTo('body').hide();
        const tipW = $tip.width();
        const tipH = $tip.height();

        for (let i = 0, len = data.length; i < len; i++){
            segmentTotal += data[i].value;
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute("data-order", i);
            g.setAttribute("class", settings.pieSegmentGroupClass);
            $groups[i] = $(g).appendTo($pathGroup);
            $groups[i]
            .on("mouseenter", pathMouseEnter)
            .on("mouseleave", pathMouseLeave)
            .on("mousemove", pathMouseMove)
            .on("click", pathClick);

            const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            p.setAttribute("stroke-width", settings.segmentStrokeWidth);
            p.setAttribute("stroke", settings.segmentStrokeColor);
            p.setAttribute("stroke-miterlimit", 2);
            p.setAttribute("fill", data[i].color);
            p.setAttribute("class", settings.pieSegmentClass);
            $pies[i] = $(p).appendTo($groups[i]);

            const lp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            lp.setAttribute("stroke-width", settings.segmentStrokeWidth);
            lp.setAttribute("stroke", settings.segmentStrokeColor);
            lp.setAttribute("stroke-miterlimit", 2);
            lp.setAttribute("fill", data[i].color);
            lp.setAttribute("opacity", settings.lightPiesOpacity);
            lp.setAttribute("class", settings.lightPieClass);
            $lightPies[i] = $(lp).appendTo($groups[i]);
        }

        settings.beforeDraw.call($this);
        // Animation start
        triggerAnimation();

        function pathMouseEnter(e){
            const index = $(this).data().order;
            $tip.text(data[index].title + ": " + data[index].value).fadeIn(200);
            if ($groups[index][0].getAttribute("data-active") !== "active"){
            $lightPies[index].animate({opacity: .8}, 180);
            }
            settings.onPieMouseenter.apply($(this),[e,data]);
        }

        function pathMouseLeave(e){
            const index = $(this).data().order;
            $tip.hide();
            if ($groups[index][0].getAttribute("data-active") !== "active"){
            $lightPies[index].animate({opacity: settings.lightPiesOpacity}, 100);
            }
            settings.onPieMouseleave.apply($(this),[e,data]);
        }

        function pathMouseMove(e){
            $tip.css({
            top: e.pageY + settings.tipOffsetY,
            left: e.pageX - $tip.width() / 2 + settings.tipOffsetX
            });
        }

        function pathClick(e){
            const index = $(this).data().order;
            const targetGroup = $groups[index][0];
            for (let i = 0, len = data.length; i < len; i++){
            if (i === index) continue;
            $groups[i][0].setAttribute("data-active","");
            $lightPies[i].css({opacity: settings.lightPiesOpacity});
            }
            if (targetGroup.getAttribute("data-active") === "active"){
            targetGroup.setAttribute("data-active","");
            $lightPies[index].css({opacity: .8});
            } else {
            targetGroup.setAttribute("data-active","active");
            $lightPies[index].css({opacity: 1});
            }
            settings.onPieClick.apply($(this),[e,data]);
        }

        function drawPieSegments (animationDecimal){
            let startRadius = -PI / 2; // -90 degree
            let rotateAnimation = 1;
            if (settings.animation) {
            rotateAnimation = animationDecimal; // count up between 0~1
            }

            $pathGroup[0].setAttribute("opacity", animationDecimal);

            // draw each path
            for (let i = 0, len = data.length; i < len; i++){
            const segmentAngle = rotateAnimation * ((data[i].value / segmentTotal) * (PI * 2)); // start radian
            const endRadius = startRadius + segmentAngle;
            const largeArc = ((endRadius - startRadius) % (PI * 2)) > PI ? 1 : 0;
            const startX = centerX + cos(startRadius) * pieRadius;
            const startY = centerY + sin(startRadius) * pieRadius;
            const endX = centerX + cos(endRadius) * pieRadius;
            const endY = centerY + sin(endRadius) * pieRadius;
            const startX2 = centerX + cos(startRadius) * (pieRadius + settings.lightPiesOffset);
            const startY2 = centerY + sin(startRadius) * (pieRadius + settings.lightPiesOffset);
            const endX2 = centerX + cos(endRadius) * (pieRadius + settings.lightPiesOffset);
            const endY2 = centerY + sin(endRadius) * (pieRadius + settings.lightPiesOffset);
            const cmd = [
                'M', startX, startY, // Move pointer
                'A', pieRadius, pieRadius, 0, largeArc, 1, endX, endY, // Draw outer arc path
                'L', centerX, centerY, // Draw line to the center.
                'Z' // Close path
            ];
            const cmd2 = [
                'M', startX2, startY2,
                'A', pieRadius + settings.lightPiesOffset, pieRadius + settings.lightPiesOffset, 0, largeArc, 1, endX2, endY2, // Draw outer arc path
                'L', centerX, centerY,
                'Z'
            ];
            $pies[i][0].setAttribute("d", cmd.join(' '));
            $lightPies[i][0].setAttribute("d", cmd2.join(' '));
            startRadius += segmentAngle;
            }
        }

        let animFrameAmount = (settings.animation) ? 1 / settings.animationSteps : 1; // if settings.animationSteps is 10, animFrameAmount is 0.1
        let animCount = (settings.animation) ? 0 : 1;

        function triggerAnimation(){
            if (settings.animation) {
            requestAnimFrame(animationLoop);
            } else {
            drawPieSegments(1);
            }
        }

        function animationLoop(){
            animCount += animFrameAmount; // animCount start from 0, after "settings.animationSteps"-times executed, animCount reaches 1.
            drawPieSegments(easingFunction(animCount));
            if (animCount < 1){
            requestAnimFrame(animationLoop);
            } else {
            settings.afterDrawed.call($this);
            }
        }

        return $this;
    };

    function Max(arr){
        return Math.max.apply(null, arr);
    }

    function Min(arr){
        return Math.min.apply(null, arr);
    }

    return $wrapper;
};

export default drawPieChart;
