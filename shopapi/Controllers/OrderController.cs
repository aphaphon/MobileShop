using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using shopapi.Models;

namespace shopapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private static List<Order> orders = new List<Order>();
        private static int Count = 1;

        [HttpPost]
        public void Post([FromBody] Order order)
        {
            order.OrderId = $"Order0{Count++}";
            order.Name = "iPhone";
            order.TotalAmount = order.Price * order.Amount;
            order.Group = CalculateGroup(order.TotalAmount);
            orders.Add(order);
        }

        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return orders;
        }

        private string CalculateGroup(int score)
        {
            var Group = "";
            if (score >= 20001)
            {
                Group = "A";
            }
            else if (score >= 15001)
            {
                Group = "B";
            }
            else if (score <= 15000)
            {
                Group = "C";
            }
            return Group;
        }

    }
}
