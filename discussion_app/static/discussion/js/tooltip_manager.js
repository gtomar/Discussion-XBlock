// Generated by CoffeeScript 1.6.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.TooltipManager = (function() {
    function TooltipManager() {
      this.hideTooltip = __bind(this.hideTooltip, this);
      this.moveTooltip = __bind(this.moveTooltip, this);
      this.showTooltip = __bind(this.showTooltip, this);
      this.$body = $('body');
      this.$tooltip = $('<div class="tooltip"></div>');
      this.$body.delegate('[data-tooltip]', {
        'mouseover': this.showTooltip,
        'mousemove': this.moveTooltip,
        'mouseout': this.hideTooltip,
        'click': this.hideTooltip
      });
    }

    TooltipManager.prototype.showTooltip = function(e) {
      var $target, tooltipCoords, tooltipText,
        _this = this;
      $target = $(e.target).closest('[data-tooltip]');
      tooltipText = $target.attr('data-tooltip');
      this.$tooltip.html(tooltipText);
      this.$body.append(this.$tooltip);
      tooltipCoords = {
        x: e.pageX - (this.$tooltip.outerWidth() / 2),
        y: e.pageY - (this.$tooltip.outerHeight() + 15)
      };
      this.$tooltip.css;
      ({
        'left': tooltipCoords.x,
        'top': tooltipCoords.y
      });
      return this.tooltipTimer = setTimeout(function() {
        _this.$tooltip.show().css('opacity', 1);
        return _this.tooltipTimer = setTimeout(function() {
          return _this.hideTooltip();
        }, 3000);
      }, 500);
    };

    TooltipManager.prototype.moveTooltip = function(e) {
      var tooltipCoords;
      tooltipCoords = {
        x: e.pageX - (this.$tooltip.outerWidth() / 2),
        y: e.pageY - (this.$tooltip.outerHeight() + 15)
      };
      return this.$tooltip.css({
        'left': tooltipCoords.x,
        'top': tooltipCoords.y
      });
    };

    TooltipManager.prototype.hideTooltip = function(e) {
      this.$tooltip.hide().css('opacity', 0);
      return clearTimeout(this.tooltipTimer);
    };

    return TooltipManager;

  })();

  $(function() {
    return new TooltipManager;
  });

}).call(this);
