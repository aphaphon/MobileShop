namespace shopapi.Models
{
    public class Order
    {
        public string OrderId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Amount { get; set; }
        public int TotalAmount { get; set; }
        public string Group { get; set; }
    }
}